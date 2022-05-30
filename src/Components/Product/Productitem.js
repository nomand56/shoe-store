import React from 'react'
import { useParams } from 'react-router-dom'
import shoes from "../../data.json"
import {Grid,Box,Typography} from '@mui/material';
function Productitem() {
  
    const {id}=useParams()
    const shoe=shoes[id]
    console.log(shoe)
  return (<div>
<Grid container spacing={2}>
    

   <Grid item xs={8}>
  
      <Box sx={{marginLeft:2}}>
          <img style={{marginTop:20}} height={500}src={shoe.img}/>
      </Box>
      </Grid>
      <Grid item xs={4}>
          <Typography  variant="h4" component="p">
              {shoe.name}
          </Typography>
          <Typography variant="span" component="p">
             
                 <div>

                <p>
                <strong> Description:</strong>
                    Athletic or casual rubber-soled shoes are called sneakers. 
                    Before you walk your neighbor's Great Dane, you'll have 
                    to take off     
                     
                    
                    Athletic or casual rubber-soled shoes are called sneakers. 
                    Before you walk your neighbor's Great Dane, you'll have 
                    to take off
                    </p>

                 </div>
          </Typography>
          <h6>

          <strong>
              $10
          </strong>
          </h6>
<button>
   <span><input type="number" id="quantity" name="quantity" min="1" max="5"/></span> ADD to CART
</button>
      </Grid>
  </Grid>
     

  </div>


  
  )
}

export default Productitem