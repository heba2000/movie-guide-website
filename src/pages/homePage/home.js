import React, { useEffect, useState, useContext } from "react";
import Nav from "../../components/navabr/navbar";
import Search from "../../components/search/search";
import MovieItem from "../../components/movieItem/movieItem";
import { axiosInstance } from "../../network/axiosConfig";
import axios from "axios";
import Loader from "../../components/loader/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "../../context/languageContext";
import SimpleSlider from "../../components/slider/slider";


export default function Home() {
    const [moviesList, setMoviesList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchMoviesList, setSearchMoviesList] = useState([]);
    const [searchPages, setSearchPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const { contextLang, setContextLang } = useContext(LanguageContext);

    const [isLoading, setIsLoading] = useState(true);
    const handleSearch = val => {
        setSearchTerm(val.searchTerm);
        {
            (searchTerm !== "") ?
                (
                    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2bb85c65cde242afe2707a76ba2a0cde&query=${val.searchTerm}`, {
                        params: {
                            page: searchPages
                        },
                    })
                        .then((res) => {
                            setSearchMoviesList(res.data.results);
                            setMoviesList([]);
                            console.log(res.data.results)
                        })
                        .catch((err) => console.log(err))
                )
                : console.log("empty");
        }

    }

    useEffect(() => {
       ( axiosInstance.get("/3/movie/popular", {
            params: {
                page: totalPages
            },
        })
            .then((res) => {
                setMoviesList(res.data.results);
                setIsLoading(false);
                setTotalPages(totalPages);
            })
            .catch((err) => console.log(err)))
    }, [totalPages])

    useEffect(() => {
        {
            contextLang === "ar" ?
                ((axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2bb85c65cde242afe2707a76ba2a0cde&language=ar`, {
                    params: {
                        page: totalPages
                    },
                })
                    .then((res) => {
                        setMoviesList(res.data.results)
                        setTotalPages(totalPages);
                    })
                    .catch((err) => console.log(err))))
                :
                (axiosInstance.get("/3/movie/popular", {
                    params: {
                        page: totalPages
                    },
                })
                    .then((res) => {
                        setMoviesList(res.data.results);
                        setTotalPages(totalPages);
                    })
                    .catch((err) => console.log(err)))
        }
    }, [contextLang])



    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2bb85c65cde242afe2707a76ba2a0cde&query=${searchTerm}`, {
            params: {
                page: searchPages
            },
        })
            .then((res) => {
                setSearchMoviesList(res.data.results);
                setMoviesList([]);
                console.log(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [searchPages])

    return (
        <>
            <div className="py-4">
                <Nav />
                <Search onSubmit={handleSearch} />
               
            </div>
            <div className="container py-2">
            <SimpleSlider/>

                <h6>Recommended Movies</h6>
                {moviesList.length !== 0 ?
                    (<div className="row">
                        {isLoading ? (
                            <Loader />
                        ) : (moviesList.map((movie, index) => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                />
                            )
                        }))}
                        <div className="py-3 text-right">
                            <button className="btn btn-sm bg-red text-white paginate-btn mx-1" disabled={totalPages === 1} onClick={() => {
                                totalPages === 1 ? setTotalPages(1) : setTotalPages(totalPages - 1)
                            }}>
                                <FontAwesomeIcon icon="arrow-left" className='mr-3' />
                                Previous
                            </button>
                            <button className="btn btn-sm bg-red text-white paginate-btn mx-1" onClick={() => { setTotalPages(totalPages + 1); console.log(totalPages) }}>
                                Next
                                <FontAwesomeIcon icon="arrow-right" className='ml-3' />
                            </button>
                        </div>
                    </div>) : null
                }

                {searchMoviesList.length !== 0 && moviesList.length == 0 ?
                    (<div className="row">
                        {searchMoviesList.map((movie, index) => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                />
                            )
                        }
                        )}

                        <div className="py-3 text-right">
                            <button className="btn btn-sm bg-red text-white paginate-btn mx-1" disabled={searchPages === 1 || searchMoviesList.length <= 20} onClick={() => {
                                searchPages === 1 ? setSearchPages(1) : setSearchPages(searchPages - 1)
                            }}>
                                <FontAwesomeIcon icon="arrow-left" className='mr-3' />
                                Previous
                            </button>
                            <button className="btn btn-sm bg-red text-white paginate-btn mx-1" disabled={searchMoviesList.length <= 20}
                                onClick={() => { setSearchPages(searchPages + 1); console.log(searchPages) }}>
                                Next
                                <FontAwesomeIcon icon="arrow-right" className='ml-3' />
                            </button>
                        </div>
                    </div>) : null
                }

            </div>
        </>
    );
}
