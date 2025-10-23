import { MovieDetailsDBResponse } from "../movie-details-response.interface";
import { Result } from "../moviedb-response";
import { Movie, MovieDetails } from "../movies.interface";

export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDAte: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }
    }

    static fromTheMovieDBToMovieDetails = (movie: MovieDetailsDBResponse): MovieDetails => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDAte: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            duration: movie.runtime,
            budget: movie.budget,
            genre: movie.genres.map(genre => genre.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        }
    }
}