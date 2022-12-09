export type Movie = {
  backdrop_path: string;
  status: string;
  id: number;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  adult: boolean;
  tagline: string;
  revenue: number;
  release_date: string;
  genres: Genres[];
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Cast = {
  id: number;
  character: string;
  credit_id: string;
  name: string;
  original_name: string;
  profile_path: string;
};

export type Person = {
  id: number;
  birthday: string;
  name: string;
  gender: number;
  biography: string;
  popularity: number;
  profile_path: string;
  place_of_birth: string;
};

export type Crew = {
  job: string;
  name: string;
  credit_id: number;
};

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Genres = {
  id: number;
  name: string;
};
