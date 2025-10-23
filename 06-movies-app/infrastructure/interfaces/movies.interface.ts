export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDAte: Date;
    rating: number;
    poster: string;
    backdrop: string;
}

export interface MovieDetails extends Movie {
    genre: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}