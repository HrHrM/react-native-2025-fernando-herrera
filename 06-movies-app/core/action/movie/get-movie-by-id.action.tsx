import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDetailsDBResponse } from "@/infrastructure/interfaces/movie-details-response.interface";
import { MovieDetails } from "@/infrastructure/interfaces/movies.interface";
import { movieApi } from "../api/moviedb-api";

export const getMovieByIdAction = async (id: number | string): Promise<MovieDetails> => {
    try {
        const { data } = await movieApi.get<MovieDetailsDBResponse>(`/${id}`);
        console.log(JSON.stringify(data, null, 2));
        // return data;

        const movie = MovieMapper.fromTheMovieDBToMovieDetails(data)

        return movie;

    } catch (error) {
        console.log("error", error);
        throw 'Cannot load movie by id';
    }
}