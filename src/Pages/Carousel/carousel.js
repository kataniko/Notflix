import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import api from '../../Services/api'
import { Link } from 'react-router-dom'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid2 from '@mui/material/Unstable_Grid2';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"; 
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {

    const [films, setFilms] = useState([]);

  useEffect(() => {

    async function loadFilms() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "878f50dfcec80fb4a31c7bf1527cc55d",
          language: "en",
          page: 1,
        }
      })
      setFilms(response.data.results.slice(0, 10))
    }

    loadFilms();

  }, [])

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
        {films.map((film) => {
            return (
        <SwiperSlide>
            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
        </SwiperSlide>
            )
        })} 
       
      </Swiper>
    </>
  );
}
