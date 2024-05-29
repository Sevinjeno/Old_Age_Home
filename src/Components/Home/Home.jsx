import React, { useState } from 'react'
import "./Home.css"
import cover2 from "../../assets/Images/Cover_old2.JPG"
import facility from "../../assets/Images/facility_hand.jpeg"
import Testimonies from '../Testimonies/Testimonies'
import About from '../About/About'
import Facility from '../Facility/Facility'
import check from "../../assets/Images/new1.png"
import { Link } from 'react-scroll'
const Home = () => {



  function Onfacility(){
    alert("Under Development")
  }

  return (
      <>
                          <div className="Home__facility__main">
                            <div className="Home__FacilityContent1">
                                <div className="leftItem"><span className='highlight1'>Welcome to Pushpa sadan Old age home,</span> where compassionate care meets comfort. Our mission is to provide a nurturing environment for seniors to thrive in their golden years.
                                <Link to="contact" smooth={true} duration={1800} offset={-50}><div className='leftItem__buttons'><span><button> Contact us</button></span></div></Link>
                                </div>
                                  <div className="rightItem"><img src={cover2} id="Image__cover" /></div>
                             </div>       
                          <div className="Home__FacilityContent2">
                                  <div className="leftItem2"><img src={check}  /></div>
                                  <div className="rightItem2">Our<span className='highlight1'> Facilities</span> empower seniors to live comfortably and enjoy a fulfilling lifestyle, surrounded by a warm and caring community residents discover not just a place to reside but a vibrant space to thrive, connect, and savor the richness of life.<p id="linkfacility">To know more about our Facilities <button type='button' id="facilityPage" onClick={Onfacility}>Click here</button></p></div>
                             </div>   
                          </div>
                             <About /> 
                             <Testimonies />
                          
                             {/* <Facility />  */}

      </>
    )
}

export default Home