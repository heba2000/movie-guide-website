import { ImageBaseURL } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './movieItem.css'
import { Link } from "react-router-dom";
import { addToFavorites } from '../../store/actions/favoritesAction'
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';

function MovieItem(props) {
    const [clicked, setClicked] = useState(false);
    const [favorites, setFavorites] = useState([]);

    let favoritesState = useSelector((state) => state)
    const dispatch = useDispatch();

    const handleAddingFavoritesChange = movie => {
        dispatch(addToFavorites(movie))
    }
    const handleRemoveFavoritesChange = () => {
        console.log(favoritesState)
    }

    // const addFavorites= movie =>{
    //     const newFavs = [movie ,...favorites];
    //     setFavorites(newFavs);
    // }

    return (
        <div className="col-md-6 col-lg-3 mx-auto mx-2 my-1">
            <div className="card">
                <div className="img-container">
                    <img src={`${ImageBaseURL}${props.poster_path}`} className="card-img-top" alt="movie-image" />
                    <div className="card-layer d-flex justify-content-center align-items-center">
                        <Link className="btn bg-red text-black" to={`/movieDetails/${props.id}`}>
                            PREVIEW
                        </Link>
                    </div>
                </div>
                <div className="card-body px-0 ">
                    <h6 className="card-text d-inline-block w-75">{props.title}</h6>

                    <span className="bg-red px-2 py-1 float-right rounded"
                        onClick={() => {
                            clicked ? handleRemoveFavoritesChange() : handleAddingFavoritesChange(props.movie)
                            setClicked(clickbility => !clickbility);
                        }
                        }
                    >
                        <FontAwesomeIcon icon="heart" className={clicked ? 'fa-sm text-white' : 'fa-sm text-dark'} />
                    </span>

                    <h6 className="rate-icon py-1">
                        <FontAwesomeIcon icon="star" className='mr-2' />
                        {(props.vote_average)}
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;