import React from 'react'
import '../Header/header.css'
import { GiAbstract050 } from "react-icons/gi";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <header>
      <div className='ban'>
        <h1>
          <Link className='logo' to="/">
            <GiAbstract050 className='icon' />
            <span className='not'>Not</span>
            Flix
          </Link>
        </h1>
      </div>
      <Link to="/favs"><Button sx={{ color: "white", borderColor: "white" }} variant="outlined">My Films</Button></Link>
    </header>
  )
}

export default Header