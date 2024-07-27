import { Button, TextField, Typography } from '@mui/material'
import React from 'react'


const AddRecipes = () => {
  return (
       <div style={{marginLeft:"100px" , marginTop:"100px", marginRight:"100px" ,marginBottom:"100px"}}>
 <Typography color="secondary" variant="h3" fontFamily="Avenir" style={{textAlign:"center"}}>ADD RECIPE</Typography> 
 <br /><br />
 <TextField id="standard-basic" fullWidth color="info" label="Recipe Name" variant="filled" />
 <br /><br />
 <TextField id="standard-basic" fullWidth color="info" label="Description" variant="filled" />
 <br></br>
 <label htmlFor="">Upload Image : </label><br/><input type="file" /><br /><br />
 <TextField id="outlined-basic" fullWidth color="info" label="Ingredients" variant="filled" />
 <br /><br />
 <TextField id="filled-basic" fullWidth color="info" label="Category of your recipe" variant="filled" />
<br /><br />
<Button variant="contained" fullWidth color="success">Submit</Button>
    </div>
  )
}

export default AddRecipes
