import React, { useState } from 'react'
import "./Navbar.css"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { useMediaQuery } from 'react-responsive';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { Navbar_data } from './Navbar_data'
import { IconContext } from 'react-icons/lib'

const Navbar=()=>{
    const [sidebar,setSidebar]=useState(false);

    const isSmallScreen=useMediaQuery({maxWidth:712}) 
    const showSidebar=()=>setSidebar(!sidebar)

   const NavSidebar=()=>{
    return(
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='Side__Navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <div className='Side_Title'>
            Pushpa Sadan
        </div>
        </div>
             <nav className={sidebar?'nav-menu active':'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                     <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                 {
                    Navbar_data.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                             <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                             </Link>
                            </li>
                        )
                    })
                 }
              </ul>
             </nav>
    </IconContext.Provider>
    )
   }

   const NavNormal =()=> {
    return(
        <div className="Main__Navbar">
        <div key={"Head_Title"} style={{color:"white",fontSize:"30px"}}>
            Pushpa Sadan 
        </div>
        <ul>
        {
                  Navbar_data.map((item,index)=>{
                      return(
                          <li key={index} className={"navmain__item"}>
                           <Link to={item.path}>
                              <span>{item.title}</span>
                           </Link>
                          </li>
                      )
                  })
               }
        
        </ul>
            
        </div>   
    )
   }


    return(
        <>
          {NavSidebar()}
        </>
    )

}

export default Navbar