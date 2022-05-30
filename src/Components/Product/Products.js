import React from 'react'
import Shoes from "../../data.json"
import {Link} from "react-router-dom"
import {Box,Grid} from "@mui/material"
function Products() {
  return (<div>
   <h1>Trending</h1>
  <Box sx={{display:"flex"}}>
  <Grid container spacing={12}>

        {Object.keys(Shoes).map(keyName=>{
          const shoe = Shoes[keyName];
          return (
            <Grid item xs={4}>
          
            <Link key={keyName} 
            className="link" 
            to={`/products/${keyName}`
            }
            style={{ textDecoration: 'none' ,color:"black"}}>
                        <img src={shoe.img} height={500} alt="shoe" />
                        <h4>{shoe.name}</h4>
            </Link>
            
              </Grid>)
        })}
        </Grid>
        </Box>
                    
    
</div>
  )
}

export default Products