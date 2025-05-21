import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsCashCoin,
    BsAlarmFill,
    BsCalendar2CheckFill,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";

import './Movie.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
        
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div className="movie-page">
            {movie && (
            <>
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline">{movie.tagline}</p>
                <div className="info">
                    <h3>
                       <BsCashCoin /> Orçamento: 
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div className="info">
                    <h3>
                       <BsGraphUp /> Receita: 
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div className="info">
                    <h3>
                       <BsAlarmFill /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </div>
                <div className="info">
                    <h3>
                        <BsCalendar2CheckFill /> Lançamento:
                    </h3>
                    <p>{new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>
                </div>
                <div className="info description">
                    <h3>
                       <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </div>
            </>
        )}
        </div>
    );
};

export default Movie;