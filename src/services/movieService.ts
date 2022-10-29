import { IMovie } from '../model/IMovie';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

export function discoverMovies(): Promise<IMovie[]> {
  return fetch(
    `${movieApiBaseUrl}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

export function searchMovies(search: string): Promise<IMovie[]> {
  return fetch(
    `${movieApiBaseUrl}/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

function mapResult(res: any[]): IMovie[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = movie;

    return {
      id,
      title,
      year: release_date,
      rating: vote_average,
      resume: overview,
      poster: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}