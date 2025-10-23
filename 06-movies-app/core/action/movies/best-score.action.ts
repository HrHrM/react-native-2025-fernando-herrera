import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/moviedb-api";

interface Options {
    page?: number;
    limit?: number;
}

export const bestScoreAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
                limit: limit,
            }
        });
        // console.log(JSON.stringify(data, null, 2));
        // return data;

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        // console.log(movies);

        return movies;


    } catch (error) {
        console.log("error", error);
        throw 'Cannot load best score movies';
    }
}