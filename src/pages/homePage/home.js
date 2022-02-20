import React, { useEffect, useState } from "react";
import Nav from "../../components/navabr/navbar";
import axios from "axios";
import SimpleSlider from "../../components/slider/slider";
import MoviesCarousel from "../../components/scrollCarosel/moviesScrollCarousel";


export default function Home() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies ] = useState([]);

    //top Rated Movis api call/
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2bb85c65cde242afe2707a76ba2a0cde&language=en-US&page=1`, {
            params: {
            },
        })
            .then((res) => {
                setTopRatedMovies(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [])
    //top upcoming Movis api call/
       useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2bb85c65cde242afe2707a76ba2a0cde&language=en-US&page=1`, {
            params: {
            },
        })
            .then((res) => {
                setUpcomingMovies(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [])

     //top Popular Movis api call/
     useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2bb85c65cde242afe2707a76ba2a0cde&language=en-US&page=1`, {
            params: {
            },
        })
            .then((res) => {
                setPopularMovies(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="py-4">
                <Nav />
                <SimpleSlider />
            </div>
            <div className="container py-2">
                <MoviesCarousel
                    moviesList={topRatedMovies}
                    name="Top Rated Movies"
                />
            </div>
            <div className="container py-2">
                <MoviesCarousel
                    moviesList={upcomingMovies}
                    name="Upcoming Movies"
                />
            </div>
            <div className="container py-2">
                <MoviesCarousel
                    moviesList={popularMovies}
                    name="Popular Movies"
                />
            </div>
        </>
    );
}
