import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosInstance } from "../../network/axiosConfig";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import SliderMovieItem from "../sliderMovieItem/sliderMovieItem";
import './moviesScrollCarousel.css'

export default function MoviesCarousel(props) {
    const [sliderMovies, setSliderMovies] = useState([]);
    const [settings, setSettings] = useState(
        {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        })
    console.log(props.topRatedMovies)    
    return (
        <>
            <div className="movies-carousel">
                <h6 className="pb-2 text-muted"> {props.name} </h6>
                <Slider {...settings}>
                {props.topRatedMovies.length === 0 ? (
                    <Loader />
                ) : (
                    props.topRatedMovies.map((movie, index) => {
                        return (
                            <SliderMovieItem key={movie.id} 
                            movie={movie}
                            />
                        )
                      
                    })                    
                )}
                </Slider>
            </div>
        </>
    );
}
