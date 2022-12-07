export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
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
  brithday: string;
  name: string;
  gender: number;
  biography: string;
  popularity: number;
  profile_path: string;
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
