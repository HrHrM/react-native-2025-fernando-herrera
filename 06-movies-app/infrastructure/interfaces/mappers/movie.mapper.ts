import { Cast } from "../moviedb-cast-response";
import { MovieDetailsDBResponse } from "../moviedb-details-response.interface";
import { Result } from "../moviedb-response";
import { Movie, MovieCast, MovieDetails } from "../movies.interface";

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

    static fromTheMovieDBToCast = (cast: Cast): MovieCast => {
        return {
            id: cast.id,
            name: cast.name,
            character: cast.character ?? '',
            avatar: cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'https://i.imgur.com/V4RclNb.png',
        }
    }
}