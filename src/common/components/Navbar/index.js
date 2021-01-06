import React, { useState, useEffect } from 'react';
import { withRouter, NavLink } from "react-router-dom";
import logo from '../../assets/images/Navbar/logo.png';
import './style.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import resume from "../../assets/documents/Chad.Liu_CV.pdf"



export const Navbar = () => {
    
    const [ transparentNavbar, setTransparentNavbar ] = useState(true);
    const handleTransparency = () =>{
        const distanceFromTop = window.scrollY;
        // console.log(distanceFromTop);
        if (transparentNavbar && distanceFromTop!==0) {
            setTransparentNavbar(false)
        }
        if(distanceFromTop==0){
            setTransparentNavbar(true)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleTransparency);
    }, [])



    return(
        <header className={transparentNavbar? "navbar": "navbar solid"}>
            <nav>
                <ul>
                    {/* <li><img src={logo} alt="logo missing" /></li> */}
                    <li><NavLink to="/"><HomeIcon /><span>Home</span></NavLink></li>
                    <li><NavLink to="/portfolio"><AccountTreeIcon /><span>Portfolio</span></NavLink></li>
                    <li><NavLink to={resume} target="_blank" ><AssignmentIcon /><span>Resume</span></NavLink></li>
                    <li><NavLink to="/contact-me" ><ContactPhoneIcon /><span>Contact Me</span></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
