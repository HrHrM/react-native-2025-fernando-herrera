import { bestScoreAction } from "@/core/action/movies/best-score.action"
import { nowPlayingAction } from "@/core/action/movies/now-playing.action"
import { popularAction } from "@/core/action/movies/popular.action"
import { toBeReleasedAction } from "@/core/action/movies/to-be-released.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const bestScoreQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'bestScore', 1],
        queryFn: ({ pageParam }) => {
            return bestScoreAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.length > 0 ? pages.length + 1 : undefined;
        },
    })

    const toBeReleasedQuery = useQuery({
        queryKey: ['movies', 'toBeReleased'],
        queryFn: toBeReleasedAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        bestScoreQuery,
        toBeReleasedQuery,
    }

}
