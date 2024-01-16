import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as RiIcons from "react-icons/ri";


export const Navbar_data =[

    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text',
    },
    {
        title:'Facilities',
        path:'/facilities',
        icon:<FaIcons.FaHandsHelping />,
        cName:'nav-text',
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<RiIcons.RiContactsLine />,
        cName:'nav-text',
        
    }



]