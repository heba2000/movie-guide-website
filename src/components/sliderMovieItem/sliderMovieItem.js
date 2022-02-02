import { ImageBaseURL } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../movieItem/movieItem.css'
import { Link } from "react-router-dom";
import { addToFavorites } from '../../store/actions/favoritesAction'
import { removeFromFavorites } from "../../store/actions/favoritesAction";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';

function SliderMovieItem(props) {
    const [clicked, setClicked] = useState(false);
    let favoritesState = useSelector((state) => state)
    const dispatch = useDispatch();

    function dispatchFavoritesAdd(movie) {
        favoritesState.find(element => element.id === movie.id) !== undefined ?
            console.log("not Fund")
            : dispatch(addToFavorites(movie))
    }
    return (
            <div className="card max-width-250">
                <div className="img-container">
                    <img src={`${ImageBaseURL}${props.movie.poster_path}`} className="card-img-top" alt="movie-image" />
                    <div className="card-layer d-flex justify-content-center align-items-center">
                        <Link className="btn bg-red text-black" to={`/movieDetails/${props.movie.id}`}>
                            PREVIEW
                        </Link>
                    </div>
                </div>
                <div className="card-body px-0 ">
                    <h6 className="card-text d-inline-block w-75">{props.movie.title}</h6>
                    <span className="bg-red px-2 py-1 float-right rounded"
                        onClick={() => {
                            clicked ? dispatch(removeFromFavorites(props.movie.id)) : dispatchFavoritesAdd(props.movie)
                            setClicked(clickbility => !clickbility);
                                        }
                        }
                    >
                        <FontAwesomeIcon icon="heart" className={clicked ? 'fa-sm text-white' : 'fa-sm text-dark'} />
                    </span>

                    <h6 className="rate-icon py-1">
                        <FontAwesomeIcon icon="star" className='mr-2' />
                        {(props.movie.vote_average)}
                    </h6>
                </div>
            </div>

    );
}

export default SliderMovieItem;