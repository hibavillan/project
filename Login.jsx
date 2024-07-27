import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
 
  return (
    <div style={{marginLeft:"100px" , marginTop:"100px", marginRight:"100px" ,marginBottom:"100px"}}>
    <Typography color="secondary" variant="h3"  fontFamily="Avenir" style={{textAlign:"center"}}>LOGIN</Typography> 
    <br /><br />
    <TextField id="standard-basic" fullWidth color="secondary" label="Email" variant="filled" />
    <br /><br />
    <TextField id="outlined-basic" fullWidth color="secondary"  type="password" label="Password" variant="filled" />
    <br /><br />
   <Button variant="contained" fullWidth color="success">Submit</Button>
       </div>
  )
}

export default Login