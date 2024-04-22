import logo from './logo.svg';
import './App.css';
import {Button, TextField, Grid, Box} from '@mui/material';

function Popup() {
    alert('Signup successful!')
}

function App() {
  return (
      <div className="App">
          <Grid container spacing={2}>

              <Grid item xs={6} justifyContent="center" alignItems="center">
                  <h1>Ourkive</h1>
              </Grid>

              <Grid item xs={3}>
                  <Box component="img" sx={{height: '50%', width: '50%'}} alt="A logo" src={logo}/>
              </Grid>

              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                  <Button variant='contained' onClick={Popup}>Sign Up</Button>
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                  <TextField fullWidth id="search-bar" type="text" label="Title" variant="outlined"
                             style={{margin: '30px'}}/>
              </Grid>

              <Grid item xs={12}>
                  <nav id="main_nav">
                      <a href="Add.html">Add Form</a>
                  </nav>
              </Grid>

          </Grid>


          <footer>William Smith 2024</footer>
      </div>
  );
}

export default App;
