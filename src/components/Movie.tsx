import React, { useContext } from "react";
import { MoviesContext } from '../services/context';

export const Movie = () => {
    const { movies } = useContext(MoviesContext);

    return (
        <div className='flex flex-wrap'>
            {movies.map((movie) => (
                <div className="py-12 sm:max-w-xl sm:mx-auto">
                    <div className="bg-slate-600 shadow-lg max-h-80 sm:rounded-3xl p-8 flex space-x-8">
                        <div className="h-48 overflow-visible w-1/2">
                            <img className="rounded-3xl shadow-lg" src={movie.poster} alt={movie.title} />
                        </div>
                        <div className="flex flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-3xl font-bold text-slate-200">{movie.title}</h2>
                                <div className="bg-red-500 text-red-200 font-bold rounded-xl p-2">{movie.rating}</div>
                            </div>
                            <div>
                                <div className="text-xsm text-gray-400">{movie.year}</div>
                            </div>
                            <p className=" text-sm text-gray-400 max-h-40 overflow-y-hidden">
                                {movie.resume}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};