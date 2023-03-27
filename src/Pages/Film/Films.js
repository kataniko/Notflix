import '../Film/Films.css'
import React from 'react'
import '../Home/Home.css'
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../Services/api';
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//mui
import Card2 from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent2 from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { SiImdb } from 'react-icons/si'


const Films = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "eng",
        }
      })
        .then((response) => {
          setFilm(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("FILME NAO ENCONTRADO");
          navigate("/", { replace: true });
          return;
        })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [navigate, id])


  //save film

  function saveFilm() {
    const minhaLista = localStorage.getItem("@NotFlix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilm = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === film.id)

    if (hasFilm) {
      toast.warn("Esse filme já está na sua lista!")
      return;
    }

    filmesSalvos.push(film);
    localStorage.setItem("@NotFlix", JSON.stringify(filmesSalvos));
    toast.success("Film saved with success!")

  }

  return (
    <div className='fundo'>
      <Grid2 sx={{ margin: 2, display: "flex", justifyContent: "space-around" }} container spacing={6}>
        <motion.div initial={{ x: -100, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }}>
          <Box
            sx={{
              perspective: '1000px',
              '& > div': {
                transform: 'rotateY(30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            }}
          >

            <Card className="card2"
              variant="outlined"
              sx={{
                minHeight: '280px',
                width: 400,
                backgroundColor: 'transparent',
                marginTop: 10,
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
                  border: '1px solid ',
                  borderColor: '#000',
                }}
              >
              </CardContent>
            </Card>
          </Box>
        </motion.div>

        <motion.div initial={{ z: 100, opacity: 0, scale: 0.7, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }}>

          <Card2 className='card'>

            <div className='border2'>

              <CardContent2>

                <Typography sx={{ fontFamily: "Cinzel", maxWidth: "600px" }} variant="h5" color="red" gutterBottom>
                  Overview:<p style={{ fontSize: "20px", color: "white" }}>{film.overview}</p>
                </Typography>

                <Typography variant="h5" color="white" component="div">
                  <SiImdb style={{ fontSize: "30px", color: "red" }} /> : {film.vote_average}
                </Typography>
              </CardContent2>
              <CardActions>
                <Button sx={{ color: "red" }} size="medium" onClick={saveFilm}>
                  Save
                </Button>

                <Button sx={{ color: "red" }} size="medium" >
                  <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${film.title} Trailer`}>
                    Trailer
                  </a>
                </Button>

              </CardActions>
            </div>
          </Card2>
        </motion.div>

        <motion.div className='cardini3' initial={{ x: 100, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }}>
          <Box
            sx={{
              perspective: '1000px',
              '& > div': {
                transform: 'rotateY(-30deg)',
                '& > div:nth-child(2)': {
                  transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
                },
                '& > div:nth-child(3)': {
                  transform: 'translate3d(45px, 50px, 40px)',
                },
              },
            }}
          >
            <Card className="card3"
              variant="outlined"
              sx={{
                minHeight: '500px',
                width: 400,
                backgroundColor: 'transparent',
                marginTop: 10,
              }}
            >
              <Typography sx={{ fontFamily: "Cinzel", fontWeight: "bold", textAlign:"center" }} variant="h4" color="white" gutterBottom>
                {film.title}
              </Typography>
            </Card>
          </Box>
        </motion.div>
      </Grid2>
    </div>
  )
}

export default Films