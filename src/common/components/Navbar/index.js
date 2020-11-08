import React from 'react';
import { withRouter, Link } from "react-router-dom";
import logo from '../../assets/images/Navbar/logo.png';
import './style.scss';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import resume from "../../assets/documents/Chad.Liu_CV.pdf"



export const Navbar = () => {
    return(
        <header className="navbar">
            <nav>
                <ul>
                    {/* <li><img src={logo} alt="logo missing" /></li> */}
                    <li><Link to="/"><HomeIcon /><span>Home</span></Link></li>
                    <li><Link to="/portfolio"><AccountTreeIcon /><span>Portfolio</span></Link></li>
                    <li><Link to={resume} target="_blank" ><AssignmentIcon /><span>Resume</span></Link></li>
                    <li><Link to="/contact-me" ><ContactPhoneIcon /><span>contact me</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}
