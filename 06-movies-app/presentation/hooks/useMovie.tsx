import { getMovieByIdAction } from "@/core/action/movie/get-movie-by-id.action"
import { useQuery } from "@tanstack/react-query"

export const useMovie = (id: string) => {
    const movieByIdQuery = useQuery({
        queryKey: ['movie', 'byId', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })


    return {
        movieByIdQuery,

    }

}
