import React from 'react';
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Facility from './Components/Facility/Facility';
import About from './Components/About/About';
import ContactUs from './Components/Contact/ContactUs';
import { Element } from 'react-scroll';



const App =()=>{
    return(
         <div className='BodyContainer' >
         <Navbar />
         <Home />
         <Element name="facility">
         <Facility />
         </Element>
         <Element name="contact">
         <ContactUs />
         </Element>
         </div>
    )
}

export default App