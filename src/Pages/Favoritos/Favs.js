import { useEffect, useState } from 'react';
import '../Favoritos/Favs.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

function Favs() {
  const [films, setFilms] = useState([])

  useEffect(() => {

    const minhaLista = localStorage.getItem("@NotFlix");
    setFilms(JSON.parse(minhaLista) || [])

  }, [])


  function excluirFilme(id) {
    let filtroFilmes = films.filter((item) => {
      return (item.id !== id)
    })

    setFilms(filtroFilmes);
    localStorage.setItem("@NotFlix", JSON.stringify(filtroFilmes))
    toast.success("Film removed with success")
  }

  return (
    <div className='meus-filmes'>
      <Typography sx={{ textAlign: "center", color: "white", fontSize: 40, fontFamily: "Cinzel" }}>My List</Typography>
      <Card sx={{ backgroundColor: "transparent" }}>
        <CardActionArea >
          {films.map((item) => {
            return (
              <CardContent className='card4' sx={{ margin: 5, padding: 4 }} key={item.id}>

                <Typography sx={{ color: "white", fontFamily: "Cinzel" }} gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>

                <div>
                  <Link to={`/film/${item.id}`}>Show Details</Link>
                  <Button onClick={excluirFilme} className='button' sx={{ color: "white", borderColor: "red", textDecoration: "none" }} color='error' variant="outlined">
                    Delete
                  </Button>
                </div>

              </CardContent>
            )
          })}
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Favs;

