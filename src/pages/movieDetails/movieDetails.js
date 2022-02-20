import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosInstance } from "../../network/axiosConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageBaseURL } from "../../constants";
import './movieDetails.css'

function MovieDetails(props) {
    const [movieDetails, setMovieDetails] = useState({});
    const params = useParams();

    useEffect(() => {
        axiosInstance.get(`/3/movie/${params.id}`)
            .then((res) => { setMovieDetails(res.data); console.log(movieDetails) })
            .catch((err) => console.log(err));
    });

    return (
        <>
            <div className="movie-dets container py-5">
                <div className="row py-2">
                    <div className="col-md-4  d-flex justify-content-center">
                        <div className="movie-poster">
                            <img src={`${ImageBaseURL}${movieDetails.poster_path}`} alt='Movie poster'/>
                        </div>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <h2 className="">{movieDetails.title}</h2>
                        {movieDetails?.genres?.map((genre, indx) => <span className="py-3 generes">{genre.name} . </span>
                        )}
                        <div className="movie-icons py-2">
                            <ul className="nav">
                                <li className="nav-item  mr-4 icon my-2">
                                    <FontAwesomeIcon icon="star" className='fa-lg mr-2 ' />
                                    {movieDetails.vote_average}
                                </li>
                                <li className="nav-item   mr-4 icon my-2">
                                    <FontAwesomeIcon icon="user" className='fa-lg mr-2 ' />
                                    {movieDetails.popularity}
                                </li>
                                <li className="nav-item  mr-4 icon my-2">
                                    <FontAwesomeIcon icon="calendar-alt" className='fa-lg mr-2' />
                                    {movieDetails.release_date}
                                </li>
                                <li className="nav-item  mr-4 icon language my-2" >
                                    <FontAwesomeIcon icon="language" className='fa-lg mr-2 ' />
                                    {movieDetails.original_language}
                                </li>
                                <li className="nav-item  mr-4 icon my-2" >
                                    <FontAwesomeIcon icon="globe" className='fa-lg mr-2 ' />
                                    {movieDetails?.production_countries?.map((company, indx) => <span> {company.name},  </span>
                                    )}

                                </li>

                            </ul>
                        </div>
                        <p className="py-4">
                            {movieDetails.overview}
                        </p>
                        <div className="row py-2">
                            <div className="col-md-6">
                                <h6 className="title"> Movie Tagline :</h6>
                                <span className=""> "{movieDetails.tagline}" </span>
                            </div>
                            <div className="col-md-6">
                                <h6 className="title"> Production Companies :</h6>
                                {movieDetails?.production_companies?.map((company, indx) => <span>{company.name} , </span>
                                )}
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-md-4 d-flex justify-content-start align-items-center">
                                <button className="btn movie-btn w-100">
                                    <FontAwesomeIcon icon="play" className=' mr-2 ' />
                                    Play</button>
                            </div>
                            <div className="col-md-4 d-flex justify-content-start align-items-center">
                                <button className="btn bg-red movie-btn  w-100">
                                    <FontAwesomeIcon icon="plus" className='mr-2 ' />
                                    Add to Favorites</button>
                            </div>
                            <div className="col-md-4 d-flex justify-content-start align-items-center">
                                <button className="btn bg-red movie-btn  w-100">
                                    <FontAwesomeIcon icon="film" className='mr-2 ' />
                                    Trailer </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>

    );
}

export default MovieDetails;