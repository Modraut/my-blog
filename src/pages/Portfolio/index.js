import React, { Fragment }from "react"
import { Navbar } from "../../common/components/Navbar"

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip, faEnvelopeSquare  } from '@fortawesome/free-solid-svg-icons';
import portrait from "@/common/assets/images/Homepage/portrait.jpeg";
import { Link } from "react-router-dom";


export const Homepage = () => {
  return(
    <div className="homepage">
      <div className="homepage-main">
        <div className="homepage-main-left">
          <img src={portrait} /> 
        </div>  
        <div className="homepage-main-right">
          <h3>Hello, I'm Chad Liu</h3>
          <p>I'm a passionate full-stack web developer</p>
          <ul className="homepage-main-right-links">
            <li><a href="https://github.com/Modraut?tab=repositories" target="_blank" >
              <FontAwesomeIcon size="3x" icon={faGithubSquare} color="#CECECE" />
            </a></li>
            <li><a href="https://www.linkedin.com/in/chad-liu-aa3026179/" target="_blank" >
              <FontAwesomeIcon size="3x" icon={faLinkedin} color="#2B84FF" />
            </a></li>
            <li><Link to="/resume">
              <FontAwesomeIcon size="3x" icon={faPaperclip} color="#EC2F78" />
            </Link></li>
            <li><Link to="/contact-me">
              <FontAwesomeIcon size="3x" icon={faEnvelopeSquare} color="#DB4438" />
            </Link></li>
          </ul>
          <div className="homepage-main-right-button">
            <button>Read More</button>
          </div>
        </div>  
      </div>
    </div>
  )
}