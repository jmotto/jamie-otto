import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function App() {
  return (
    <Box>
    <Grid className="App">
      <Grid className="App-name">
      Jamie Otto 
      </Grid>
      <Navbar />
     
      <Grid className="App-header">
        <p>
         <About />
        </p>
       
      </Grid>
      <Grid>
      <Portfolio />
      </Grid>

      <Grid>
      Contact
      <Contact />
      
      </Grid>
      <footer>
      <Footer />
      </footer>
      
    </Grid>
    </Box>
  );
}

export default App;
