import '@/styles/styles.css'
import '@/images/estrella.png'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

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
        {movies.map(movie => (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="resumen">
                  <AccordionTrigger className='accordionButton'>Resumen</AccordionTrigger>
                  <AccordionContent className='accordionText'>
                    {movie.overview}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rating">
                  <AccordionTrigger className='accordionButton'>Rating</AccordionTrigger>
                  <AccordionContent className='accordionText'>
                    <img href='@/images/estrella.png'/>
                    {movie.vote_average}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="releaseDate">
                  <AccordionTrigger className='accordionButton'>Fecha de lanzamiento</AccordionTrigger>
                  <AccordionContent className='accordionText'>
                    {movie.release_date}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>  
        ))}
        </div>       
    );
}

export default Movies;

{/*<div>
            <h1 className="title">Top 5 Rated Movies</h1>
            <div>
                {movies.map(movie => (
                    {/*}
                    <div key={movie.id} className="movie">
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <Accordion type="single" collapsible>
                            <AccordionItem value="resumen">
                                <AccordionTrigger>Resumen</AccordionTrigger>
                                <AccordionContent>
                                {movie.overview}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="rating">
                                <AccordionTrigger>Rating</AccordionTrigger>
                                <AccordionContent>
                                {movie.vote_average}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="releaseDate">
                                <AccordionTrigger>Fecha de lanzamiento</AccordionTrigger>
                                <AccordionContent>
                                {movie.release_date}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>


                ))}
            </div>
            </div>*/}