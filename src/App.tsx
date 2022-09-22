import React, { useState, useEffect } from 'react';
import { IMovie } from './model/IMovie';
import { discoverMovies } from './services/movieService';
import { MoviesContext } from './services/context';

import SearchForm from './components/SearchForm';
import { Movie } from './components/Movie';
function App() {

  useEffect(() => {
    discoverMovies()
      .then(setMovies)
      .catch((_) => setMovies([]));
  }, []);

  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <MoviesContext.Provider value={{ movies, updateMovies: setMovies }}>
      <div className="App">
        <div className='bg-slate-800'>
          <SearchForm/>
          <Movie/>
        </div>

      </div>
    </MoviesContext.Provider>
  );
}

export default App;
