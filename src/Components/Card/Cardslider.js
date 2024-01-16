import React from 'react'
import face from "../../assets/Images/face.jpg"
import "./Cardslider.css"

const Cardslider = (props) => {
  console.log(props)
  return (
     <>
     
       <div className="card">

              <div className="card__image">
                  <img src={face } alt="testimony image" />
              </div>

                      <div className="card__content">
                            <span className='card__name'>{props.name}</span>
                            <p className='card__text'>{props.review}
                            </p>
                      </div>
              </div>  
     </>    
  )
  
}

export default Cardslider