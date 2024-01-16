import React from 'react'
import "./Facility.css"
import { Parallax } from 'react-parallax'
import F_glasscard from './Facility_card.js/F_glasscard'
import { f_data } from './Facility_card.js/F_data'
const Facility = () => {
  return (
   <>
    <div className="MainFacility__Container">
    Facilities ....
    <div className="facility__data">
            {
              f_data.map((e,i)=>(
              <F_glasscard name={e}/>

              ))
            }
    </div>
    
    </div>
   </>
  )
}

export default Facility