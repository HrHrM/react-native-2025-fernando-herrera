import { MovieMapper } from "@/infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBCastResponse } from "@/infrastructure/interfaces/moviedb-cast-response";
import { movieApi } from "../api/moviedb-api";

export const castAction = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBCastResponse>(`/${id}/credits`);

        const movieCast = data.cast.map(MovieMapper.fromTheMovieDBToCast)

        return movieCast;


    } catch (error) {
        console.log("error", error);
        throw 'Cannot load now playing movies';
    }
}