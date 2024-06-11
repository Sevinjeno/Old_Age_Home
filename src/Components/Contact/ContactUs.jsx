import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import "./contact.css"


const ContactUs =()=>{

    const address = 'Pushpa sadan old age home, Pushpa sadan, east, Kailash Nagar Rd, next to aparna poultry farm, Vadavali Section, Ambernath, Maharashtra 421501';
    const encodedAddress = encodeURIComponent(address);
    const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    const phone = '+91 8766480884';
    const phoneLink = `tel:${phone}`;
 

    return (
        <>
            <div id="contact" className="contact-container">
                <div className='contact'><strong>Contact Us</strong></div>
                <div className="details">
                    <p><IoHome />:Pushpa sadan old age home, Pushpa sadan, east, Kailash Nagar Rd, next to aparna poultry farm, Vadavali Section, Ambernath, Maharashtra 421501</p>
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