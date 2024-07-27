import React from 'react'
import {Box, Button,Toolbar,Typography,AppBar} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RECIPE HUB
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}} >Home</Link></Button>
          <Button><Link to={'/B'} style={{textDecoration:'none',color:'white'}} >Add Recipe</Link></Button>
          <Button><Link to={'/C'} style={{textDecoration:'none',color:'white'}} >Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
