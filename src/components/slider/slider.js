import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosInstance } from "../../network/axiosConfig";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/loader";
import { ImageBaseURL } from "../../constants";
import "./slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SimpleSlider() {
    const [sliderMovies, setSliderMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (axiosInstance.get("/3/trending/movie/day", {
            params: {},
        })
            .then((res) => {
                setSliderMovies(res.data.results.splice(0, 6));
                setIsLoading(false)
            })
            .catch((err) => console.log(err)))
    }, [])

    const [settings, setSettings] = useState(
        {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 1500,
            cssEase: "linear"
        })
    return (
        <div>
            <Slider {...settings} className="container my-3 ">
                {isLoading ? (
                    <Loader />
                ) : (
                    sliderMovies.map((movie, index) => {
                        return (
                            <div className="row movie-row d-flex gx-0"  key={movie.id}>
                                <div className="layer-slider d-flex align-items-center">
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="movie-content p-3">
                                    <span className="slider-span p-1 opacity-50 bg-red"></span>
                                    <span className="ml-2"> TRENDING NOW </span>
                                    <h2 className="py-2">{movie.title}</h2>
                                       <p className="text-muted">{movie.overview}</p> 
                                       <button className="btn movie-btn">
                                    <FontAwesomeIcon icon="play" className=' mr-2 ' />
                                    Play</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 gx-0">
                                
                                </div>
                                <div className="col-md-9 gx-0">
                                    <img src={`${ImageBaseURL}${movie.backdrop_path}`} className="w-100" alt="movie-image" />
                                </div>
                            </div>
                        );
                    })
                )}
            </Slider>
        </div>
    );
}
