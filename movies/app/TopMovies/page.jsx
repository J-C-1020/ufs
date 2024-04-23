'use client'
import {useState} from 'react'
import '@/styles/styles.css'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTBkN2VjNGJiMzM0NzA4NzAwYTk5MmNhOGU3MjFiMiIsInN1YiI6IjY2MWIwZmU2ZGFmNTdjMDE3YzQwMDVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zsJFlM309hzHSf1BDuUhMuM7KN4yF6oOnt7MFauMUzw'
    }
  };
  
async function fetchMovies(){
    try{
      const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&page_size=5', options)
      const data = await res.json()
      const firstFiveMovies = data.results.slice(0, 5); // Aquí seleccionamos los primeros 5 elementos del arreglo results
      console.log(firstFiveMovies);
      return firstFiveMovies;
    }catch (error){
      console.error(error)
    }
}

async function Movies() {
    const movies = await fetchMovies();

    return (
        <div>
            <h1>Top 5 Rated Movies</h1>
            <div>
                {movies.map(movie => (
                    <div key={movie.id} className="movie">
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;