import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import Loader from "../../components/loader/loader";
import SliderMovieItem from "../sliderMovieItem/sliderMovieItem";
import './moviesScrollCarousel.css'

export default function MoviesCarousel(props) {
    const [settings, setSettings] = useState(
        {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 
                  }
                }
              ]
        })


        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", position: "absolute",
                top:"98%", left:"95%", zIndex:"99999" }}
                onClick={onClick}
              />
            );
          }
          function SampleNextArrow (props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", position: "absolute",
                top:"98%", right:"0%"}}
                onClick={onClick}
              />
            );
          }

    return (
        <>
            <div className="movies-carousel px-4">
                <h6 className="pb-2 text-muted"> {props.name} </h6>
                <Slider {...settings}>
                {props.moviesList.length === 0 ? (
                    <Loader />
                ) : (
                    props.moviesList.map((movie, index) => {
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
