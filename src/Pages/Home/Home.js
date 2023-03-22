import React from 'react'
import '../Home/Home.css'
import api from '../../Services/api'
import { useEffect, useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid2 from '@mui/material/Unstable_Grid2';
import Carousel from '../Carousel/carousel'
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { motion } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//mui
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

//https://api.themoviedb.org/3/movie/550?api_key=878f50dfcec80fb4a31c7bf1527cc55d



const Home = () => {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);


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

  if (!loading) {
    return (
      <LinearProgress color="error" />
    )
  }
  return (

    <div className='container'>

      <Carousel />

      <div className='list'>

        <Grid2 sx={{ margin: 2, display: "flex", justifyContent: "center" }} container spacing={3}>
          {films.map((film) => {
            return (

              <Grid2 sx={{ display: "flex", justifyContent: "center" }} md={3}>
                <motion.div initial={{ z: 0, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }}>
                  <Link to={`/film/${film.id}`}>

                    <Box
                      sx={{
                        perspective: '1000px',
                        transition: 'transform 0.4s',
                        '& > div, & > div > div': {
                          transition: 'inherit',
                        },
                        '&:hover': {
                          '& > div': {
                            transform: 'rotateY(30deg)',
                            '& > div:nth-child(2)': {
                              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                            },
                            '& > div:nth-child(3)': {
                              transform: 'translate3d(45px, 50px, 40px)',
                            },
                          },
                        },
                      }}
                    >
                      <Card
                        variant="outlined"
                        sx={{
                          minHeight: '280px',
                          width: 320,
                          backgroundColor: 'transparent',
                          borderColor: 'red',
                          marginTop: 10,
                          boxShadow:"2px 2px 10px red",
                        }}
                      >
                        <ImageListItem key={film.id}>
                          <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                        </ImageListItem>

                        <CardCover
                          sx={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            border: '1px solid',
                            borderColor: '#777',
                           
                          }}
                        >
                        </CardCover>
                        <CardContent
                          sx={{
                            alignItems: 'self-end',
                            justifyContent: 'flex-end',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
                            border: '1px solid',
                            borderColor: '#000',
                          }}
                        >

                          <ImageListItemBar className='dec' sx={{ color: "white", fontFamily: "Cinzel", fontWeight: "bold", textAlign: "center", }} position="below" title={film.title} />

                        </CardContent>
                      </Card>
                    </Box>
                  </Link>
                </motion.div>
              </Grid2>
            )
          })}
        </Grid2>
      </div>
    </div >
  )
}

export default Home

