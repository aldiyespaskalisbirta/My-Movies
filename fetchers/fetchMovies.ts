import { Movies } from "../interface/types";
import { basicFetch } from "./fetchData";

export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
