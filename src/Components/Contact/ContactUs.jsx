import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import "./contact.css"


const ContactUs =()=>{

    const address = '20, Kailash Colony, Kailash Nagar, Shivaji Nagar, Ambernath, Thane - 421501';
    const mapLink = 'https://www.google.com/maps/dir/?api=1&destination=20+Kailash+Colony%2C+Kailash+Nagar%2C+Shivaji+Nagar%2C+Ambernath%2C+Thane+-+421501';
    const phone = '+91 8766480884';
    const phoneLink = `tel:${phone}`;
 

    return (
        <>
            <div id="contact" className="contact-container">
                <div className='contact'>Contact Us</div>
                <div className="details">
                    <p><IoHome />:20, Kailash Colony, Kailash Nagar, Shivaji Nagar, Ambernath, Thane - 421501 (Next Aparna Poultry Farm Kailash Nagar Vadavli Section)</p>
                    <p>
                        <a href={mapLink} target="_blank" rel="noopener noreferrer">
                          <button id='directions'>Get Directions on Google Maps</button>
                        </a>
                        </p>
                    <p><IoCallSharp />: <a href={phoneLink}>{phone}</a></p>
                </div>
             </div>
        </>
    )


}

export default ContactUs