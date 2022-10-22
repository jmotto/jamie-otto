import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <nav className="App-name">
      Jamie Otto 
      </nav>
      <Navbar />
     
      <header className="App-header">
        <p>
         <About />
        </p>
       
      </header>
      <div>
      <Portfolio />
      </div>
      <div>
      Contact
      <Contact />
      </div>
      <footer>
      <Footer />
      </footer>
      
    </div>
  );
}

export default App;
