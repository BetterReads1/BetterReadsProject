import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../assets/login.css';

export default function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({username: '', password: ''});

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user:", user);

    //post request to database
    const requestDetails = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user.username, password: user.password })
    }
    fetch('/login', requestDetails)
      .then(response => response.json())
      .then(response => {
        console.log(response); //response is boolean - true if user exists in db, else false
        //if user exists in db
        if(response.validUser === true){
          //persist user data by storing in session storage
          localStorage.setItem('userId', response.userId)
          //redirect to home page
          navigate('/home');
        }
        //else
        else{
          //alert
          alert('Incorrect username and/or password');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return(
    <div className='container'> 
      <div id='login-page'>
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username"> Username: </label>
              <input type="text" name="username" id="username" onChange={handleChange} value={user.username}/>
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password: </label>
              <input type="text" name="password" id="password" onChange={handleChange} value={user.password}/>
            </div>
            <div id='button-container'>
              <input type="submit" value="LOGIN" />
            </div>
            <div className='nav-link' onClick={e => navigate('/signup')}>
              Click here to create an account
            </div>
          </div>
        </form>
      </div>
    </div> 
  )
}
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         BetterReads
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
  
// const theme = createTheme();

// export default function Login() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }