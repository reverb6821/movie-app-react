import React, { useState, useEffect } from 'react';
import { IMovie } from './model/IMovie';
import { discoverMovies } from './services/movieService';
import { MoviesContext } from './services/context';

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
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
