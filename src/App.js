import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';

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
      <Portfolio />
    </div>
  );
}

export default App;
