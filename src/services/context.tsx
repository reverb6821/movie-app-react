import React from "react";
import { IMovie } from "../model/IMovie";

export const MoviesContext = React.createContext<{
  movies: IMovie[];
  updateMovies: Function;
}>({
  movies: [],
  updateMovies: Function,
});