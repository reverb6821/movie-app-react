import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from '../services/context';

import { MdTheaters, MdTv } from 'react-icons/md'
import SearchForm from '../components/Searchbar'
import { IMovie } from '../model/IMovie';
import { trendingMovies } from '../services/movie.service';

function renderMedia(media: String) {
    if (media === 'movie') {
      return 'Movie'
    } else {
      return 'TV Series'
    }
  }

  function renderYear(year: String) {
    if (!year) {
      return 'N/A'
    } else {
      return year.substring(0, 4)
    }
  }

  function renderCategoryIcon(media: String) {
    if (media === 'movie') {
      return <MdTheaters size={20} className='pl-1 text-base' />
    } else {
      return <MdTv className='pl-1 text-base' />
    }
  }
  
const Home = () =>{
    const { movies } = useContext(MoviesContext);
    const [useMovies, setMovies] = useState<IMovie[]>([]);

    const tvShow = (useMovies: IMovie) => {
      if (useMovies.media === 'movie') {
        return useMovies.title
      } else {
        return useMovies.name
      }
    }

    useEffect(() => {
      trendingMovies()
        .then(setMovies)
        .catch((_) => setMovies([]));
    }, []);

return(
    <MoviesContext.Provider value={{ movies, updateMovies: setMovies }}>
        <SearchForm />

            <h1 className='md:heading-lg mb-6 text-xl font-light capitalize lg:mb-10'>
                Trending Movies
            </h1>

            <section className="card-collection-wrapper">
                {/**  card */}
                {useMovies.map((movie) => (
                    <div
                        className='card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer'
                        key={movie.id}
                    >
                        <div className='relative w-full rounded-lg'>
                            <div className='relative h-[133px] md:h-[140px] lg:h-[174px] '>
                               <span className=' rounded-lg box-border block overflow-hidden opacity-100 m-0 p-0 absolute inset-0'>
                                <img
                                    className='absolute box-border inset-0 p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full object-cover'
                                    src={movie.backdrop}
                                    alt={movie.title} />
                               </span>
                            </div>
                        </div>
                        <div className='mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px]'>
                            <p>{renderYear(movie.year)}</p>
                            <div className='flex items-center px-[6px] before:content-["•"]'>
                                    {renderCategoryIcon(movie.media)}
                                <p className='pl-1 pr-1'>{renderMedia(movie.media)}</p>
                            </div>
                        </div>
                        <h2 className='md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]'>
                          {tvShow(movie)}
                        </h2>
                    </div>
                ))}
            </section>
    </MoviesContext.Provider>
)
}

export default Home