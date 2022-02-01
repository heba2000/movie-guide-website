import React, { useEffect, useState } from "react";
import Nav from "../../components/navabr/navbar";
import { useSelector, useDispatch } from "react-redux";
import FavoriteMovie from "../../components/favoriteMovieItem/favoriteItem";

function Favorites() {
    let favoriteMovies = useSelector((state) => state)
    return (
        <div className="container">
            <div className="py-4">
                <Nav />
            </div>
            <div className="row">
                {  favoriteMovies.length !==0 ? (favoriteMovies.map((movie, index) => {
                    return (
                        <FavoriteMovie
                            key={movie.id}
                            movie={movie}
                        />
                    ) 
                })) : <h6 className="text-center">  YOU HAVE NOT ADDED ANY FAVORITES YET</h6>
                
                }
            </div>
        </div>
    );
}

export default Favorites;
