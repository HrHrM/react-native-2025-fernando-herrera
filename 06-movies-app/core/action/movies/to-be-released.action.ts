import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/moviedb-api";

export const toBeReleasedAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');
        // console.log(JSON.stringify(data, null, 2));
        // return data;

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        // console.log(movies);

        return movies;


    } catch (error) {
        console.log("error", error);
        throw 'Cannot load to be released movies';
    }
}