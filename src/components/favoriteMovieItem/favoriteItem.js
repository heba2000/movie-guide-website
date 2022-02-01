import { ImageBaseURL } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../store/actions/favoritesAction";
import { useSelector, useDispatch } from "react-redux";

function FavoriteMovie(props) {
    let favoritesState = useSelector((state) => state)
    const dispatch = useDispatch();

    return (
        <>
            <div className="col-md-6 col-lg-3 mx-auto mx-2 my-1">
                <div className="card">
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
                            onClick={ () => dispatch(removeFromFavorites(props.movie.id)) }
                        >
                            <FontAwesomeIcon icon="heart" className='fa-sm text-white'/>
                        </span>

                        <h6 className="rate-icon py-1">
                            <FontAwesomeIcon icon="star" className='mr-2' />
                            {(props.movie.vote_average)}
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoriteMovie;