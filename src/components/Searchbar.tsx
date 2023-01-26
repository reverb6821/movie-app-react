import React, { useState, useContext } from "react";
import { searchMovies } from '../services/movie.service';
import { MoviesContext } from '../services/context';

import { MdOutlineSearch } from 'react-icons/md'

const SearchForm = () => {

    const [search, setSearch] = useState("");
    const { updateMovies } = useContext(MoviesContext);

    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (search) {
            searchMovies(search).then((movies) => {
                updateMovies(movies);
            });
        }
    };
    return (
    <div className='drop-shadow-xl'>
        <form name="searchForm" onSubmit={(e) => handleOnSubmit(e)} noValidate className='flex grow pb-6 md:pb-10 lg:mt-9 drop-shadow-xl'>
            <MdOutlineSearch size={30} className='h-6 w-6 md:h-8 md:w-8 text-red-600' />
            <input
                className='p-2 md:text-base md:placeholder:text-base mx-4 w-full border-b border-red-500 bg-gray-800 rounded-md text-base font-light placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-red-500 focus:outline-none m'
                type='text'
                placeholder='Search Movie or Tv Shows...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name='movie'
                id="movieSearchForm"
            />
            <button
                type='submit'
                className='text-capitalize flex items-center justify-center rounded-md bg-red-600 py-2 px-3 text-xs text-white hover:bg-red-900 drop-shadow-xl'>
                Search
            </button>
        </form>
    </div>
    )
}

export default SearchForm