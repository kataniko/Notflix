import React from 'react'
import '../Home/Home.css'
import api from '../../Services/api'

import { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid2 from '@mui/material/Unstable_Grid2';
import Carousel from '../Carousel/carousel'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//https://api.themoviedb.org/3/movie/550?api_key=878f50dfcec80fb4a31c7bf1527cc55d

const Home = () => {

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

    <div className='container'>

      <Carousel />

      <div className='list'>

        <Grid2 sx={{ margin: 2 }} container spacing={3}>
          {films.map((film) => {
            return (
              <Grid2 xs={6}>
                <ImageListItem sx={{ border: 2, borderColor: "error.main", boxShadow: 4, boxShadowColor: "Red" }} key={film.id}>
                  <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                </ImageListItem>
                <ImageListItemBar className='items' sx={{ color: "white", fontFamily: "Cinzel", fontWeight: "bold", textAlign: "center" }} position="below" title={film.title} />
              </Grid2>
            )
          })}
        </Grid2>
      </div>
    </div>
  )
}

export default Home


