import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';

function  App () {
 return(
    <>  
        <Navbar />
        {/* <PortfolioContainer /> */}
        <Home />
        <Portfolio />

        <Footer className="footer"/>

    </>

 )
}
export default App;


