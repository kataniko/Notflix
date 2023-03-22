
import '../Film/Films.css'
import React from 'react'
import '../Home/Home.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../Services/api';
import { toast } from 'react-toastify'
import Card2 from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent2 from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//mui
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { red } from '@mui/material/colors';


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

  return (
    <div>
      <Grid2 sx={{ margin: 2, display: "flex", justifyContent: "space-around" }} container spacing={6}>
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
          <Card
            variant="outlined"
            sx={{
              minHeight: '280px',
              width: 400,
              backgroundColor: 'transparent',
              borderColor: 'red',
              marginTop: 10,
              boxShadow:"2px 2px 20px red",
            
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
      
        <Card2 className='card'>
          <div className='border2'>

          <CardContent2>
            <Typography sx={{fontFamily:"Cinzel" , fontWeight:"bold"}}  variant="h4" color="white" gutterBottom>
              {film.synopse}
            </Typography>
            <Typography variant="h5" color="white" component="div">
              besdsd
            </Typography>
          </CardContent2>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
          </div>
        </Card2>

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
          <Card
            variant="outlined"
            sx={{
              minHeight: '280px',
              width: 400,
              backgroundColor: 'transparent',
              borderColor: 'red',
              marginTop: 10,
              boxShadow:"2px 2px 20px red",
            
            }}
          >
            <Typography sx={{fontFamily:"Cinzel" , fontWeight:"bold"}}  variant="h4" color="white" gutterBottom>
              {film.title}
            </Typography>
            <Typography variant="h5" color="white" component="div">
              besdsd
            </Typography>
            <Typography sx={{ mb: 1.5 }}color="white">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>

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

      </Grid2>
    </div>
  )
}

export default Films