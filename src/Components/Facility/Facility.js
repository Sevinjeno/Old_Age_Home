import React from 'react'
import "./Facility.css"
import { Parallax } from 'react-parallax'
import F_glasscard from './Facility_card.js/F_glasscard'
import { f_data } from './Facility_card.js/F_data'
const Facility = () => {
  return (
   <>
    <div className="MainFacility__Container">
    <h2 style={{marginTop:"10px"}}>Facilities:</h2>
    <p style={{paddingTop:"1em",paddingLeft:"1em"}}>There are numerous facilities designed to cater to different levels of care and lifestyle preferences.</p> 
    <p style={{paddingLeft:"1em"}}>These facilities ensure that seniors can live comfortably, safely, and with dignity, regardless of their health conditions or personal requirements.</p> 
   
    <div className="facility__data">
    {f_data.map((e, i) => (
          <p key={i}>{i+1} - {e}</p>
        ))}
    </div>
    
    </div>
   </>
  )
}

export default Facility