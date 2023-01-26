import React, { useContext } from "react";
import { getMovie } from '../services/movie.service'
import { MoviesContext } from '../services/context';

const Info = () =>{
    const { movies } = useContext(MoviesContext);

    return(
        <>
            <section className='px-20 text-center md:pr-8 md:pl-0 lg:w-2/5'>
                <span className='box-border inline-block overflow-hidden opacity-100 m-0 p-0 relative max-w-full'>
                    <img 
                        src="" 
                        alt=""
                        className='flex max-w-full opacity-100 m-0 p-0 right-0 justify-between items-center rounded-lg bg-red-800' />
                </span>
            </section>
            <section className='md:w-3/5'>
                <div className='mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left'>
                    <h1 className='mb-1 text-3xl font-light md:mb-3 md:text-5xl'>
                        45345
                    </h1>
                    <h2 className='text-xs font-light text-app-placeholder sm:text-sm md:text-lg'>
                        ewrwerw
                    </h2>
                </div>
                <div className='mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left'>
                    <p className='mb-2 text-4xl font-medium md:mr-4 md:mb-0'>
                        4
                    </p>
                </div>
                <div className='mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg'>
                    <div>
                        <p className='mb-1 text-app-placeholder'>
                            Length
                        </p>
                        <p className='text-white'>
                            100
                        </p>
                    </div>
                    <div>
                        <p className='mb-1 text-app-placeholder'>
                            Language
                        </p>
                        <p className='text-white'>
                            100
                        </p>
                    </div>
                    <div>
                        <p className='mb-1 text-app-placeholder'>
                            Year
                        </p>
                        <p className='text-white'>
                            100
                        </p>
                    </div>
                    <div>
                        <p className='mb-1 text-app-placeholder'>
                            Status
                        </p>
                        <p className='text-white'>
                            100
                        </p>
                    </div>
                </div>
                <div className='mb-6'>
                    <h3 className='mb-2 md:text-lg'>
                        Genres
                    </h3>
                    <ul className='flex flex-wrap text-xs font-light md:text-sm'>
                        <li className='mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue'>
                            test
                        </li>
                        <li className='mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue'>
                            test
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h3 className='mb-2 md:text-lg'>
                        Synopsis
                    </h3>  
                    <p className='font-light'>
                        etwert    
                    </p>              
                </div>
                <div className='mb-10'>
                    <h3 className='mb-2 md:text-lg'>
                        Casts
                    </h3>  
                    <ul className='flex flex-wrap text-xs font-light md:text-sm'>
                        <li className='mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue'>
                            test
                        </li>
                        <li className='mr-2 mb-2 flex items-center justify-center rounded-md border-none bg-app-pure-white py-px px-2 text-center font-medium text-app-dark-blue'>
                            test
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Info