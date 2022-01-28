import React, { useEffect, useState } from "react";
import Nav from "../../components/navabr/navbar";
import MovieItem from "../../components/movieItem.js/movieItem";
import { useSelector, useDispatch } from "react-redux";

function Favorites() {
    // const [isLoading, setIsLoading] = useState(true);
    let favoriteMovies = useSelector((state) => state.favoritesList)
    return (
        <div className="container">
            <div className="py-4">
                <Nav />
            </div>
            <div className="row">
                { (favoriteMovies.map((movie, index) => {
                    return (
                        <MovieItem
                            key={movie.id}
                            id={movie.id}
                            adult={movie.adult}
                            overview={movie.overview}
                            popularity={movie.popularity}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            title={movie.title}
                            video={movie.video}
                            vote_average={movie.vote_average}
                            vote_count={movie.vote_count}
                            movie={movie}
                        />
                    )
                }))}
            </div>
        </div>
    );
}

export default Favorites;
