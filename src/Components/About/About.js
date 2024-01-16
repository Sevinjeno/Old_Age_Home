import React, { useState } from 'react';
import "./About.css"
import sisters from "../../assets/Images/new2.jpg"

const About = () => {

    let [read,Setread]=useState(false)

     let first=()=>( <div className='About__first'>Our goal at Pushpa Sadan is to build a lively community that cares for the overall well-being of our residents. Our devoted caregivers, guided by love, respect, and empathy, make sure that each person feels important and cherished</div>);
   
         
     let second=()=>(<div className="About__second"><p>Pushpa Sadan is proud to be entrusted to the care of the Congregation of Teresian Carmelites (CTC) Sisters.</p><p>Through the years, the CTC Sisters have been actively involved in various charitable and social initiatives, including education, healthcare, and elderly care.</p><p> Their commitment to spiritual values, community service, and the well-being of individuals aligns seamlessly with the mission of Pushpa Sadan.</p></div>)

  return (
    <>
        <div className="AboutPage">
        <div className='left__about'>

            <h1>Our Mission:</h1>
              {first()}
              
              {!read&&<button id="read" onClick={()=>{Setread(true)}}>Read more</button>}
              
              {read && second()}

              {read&&<button id="read" onClick={()=>{Setread(false)}}>Read less</button>}

        </div>

        <div className='right__about'>
           <img src={sisters} />
        </div>


          </div>


    </>
  )
}

export default About