import { IMovie } from '../model/IMovie';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/original";
const API_KEY  = '#'

export function trendingMovies(): Promise<IMovie[]> {
  return fetch(
    `${movieApiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

export function searchMovies(search: string): Promise<IMovie[]> {
  return fetch(
    `${movieApiBaseUrl}/search/movie?query=${search}&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
}

export function getMovie(id: number): Promise<IMovie[]> {
  return fetch(
    `${movieApiBaseUrl}movie/${id}?api_key=${API_KEY}&language=en-US`
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
      name,
      vote_average,
      overview,
      poster_path,
      backdrop_path,
      release_date,
      media_type,
    } = movie;

    return {
      id,
      title,
      name: name,
      year: release_date,
      rating: vote_average,
      overview: overview,
      media: media_type,
      backdrop: backdrop_path ? `${posterBaseUrl}${backdrop_path}` : undefined,
      poster: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}