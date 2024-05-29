import React from 'react';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Facility from './Components/Facility/Facility';
import About from './Components/About/About';
import ContactUs from './Components/Contact/ContactUs';



const App =()=>{
    return(
         <div className='BodyContainer' >
         <Navbar />
         <Home />
         <Facility />
         <ContactUs />
         </div>
    )
}

export default App