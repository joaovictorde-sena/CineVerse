import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const res = await fetch(`${moviesURL}top_rated?${apiKey}`);
      const data = await res.json();
      setTopMovies(data.results);
      
      
    } catch (error) {
      console.error("Erro ao buscar os filmes:", error);
    }
    
  };

  return (
      <ul className="movies-container">
        {topMovies.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </ul>
  );
};

export default Home;
