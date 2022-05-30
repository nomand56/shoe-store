import React from 'react'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import {theme } from "../Navbar/Style";
import { ThemeProvider } from '@emotion/react';
function Home() {
    const mystyle = {
        float: "left",
      };
  return (
      <ThemeProvider theme={theme}>

  <Box sx={{width:1 , height:500,backgroundColor:'#94fffc'}}>
 <Container maxWidth="lg">
    <Box sx={{marginRight:20}}>
    <img style={mystyle} src="./shoes.png"/>
    </Box>
    <Box >
        <Typography variant='h3' component="h3">
Finding You Perfect Shoes
        </Typography>
        <Typography variant='span' component="p" compon></Typography>
    </Box>
 </Container>



  </Box>
  
      </ThemeProvider>
    )
}

export default Home