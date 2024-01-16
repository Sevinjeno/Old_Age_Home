import React from 'react';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Facility from './Components/Facility/Facility';
import About from './Components/About/About';



const App =()=>{
    return(
         <div className='BodyContainer' >
         <Navbar />
         <Home />
         {/* <Facility /> */}
         </div>
    )
}

export default App