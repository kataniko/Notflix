import React from 'react'
import '../Header/header.css'
import { GiAbstract050 } from "react-icons/gi";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <header>
      
      <motion.div initial={{ z: 0, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }} className='ban'>
        <h1>
          <Link className='logo' to="/">
            <GiAbstract050 className='icon' />
            <span className='not'>Not</span>
            Flix
          </Link>
        </h1>
      </motion.div>
      
      <motion.div initial={{ z: 0, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 3, }}>
        <Link to="/film/favs">
          <Button className='button' sx={{ color: "white", borderColor: "white"}} color='error' variant="outlined">
            My Films
          </Button>
        </Link>
      </motion.div>

    </header>
  )
}
export default Header