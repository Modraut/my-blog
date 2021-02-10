import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip, faEnvelopeSquare  } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";



const MyLinks = (props) => {

  return(
    <ul className={props.className} >
      <li><a href="https://github.com/Modraut?tab=repositories" target="_blank" rel="noreferrer">
        <FontAwesomeIcon size="3x" icon={faGithubSquare} color="#CECECE" />
      </a></li>
      <li><a href="https://www.linkedin.com/in/chad-liu-aa3026179/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon size="3x" icon={faLinkedin} color="#2B84FF" />
      </a></li>
      <li><Link to="/resume">
        <FontAwesomeIcon size="3x" icon={faPaperclip} color="#EC2F78" />
      </Link></li>
      <li><Link to="/contact__me">
        <FontAwesomeIcon size="3x" icon={faEnvelopeSquare} color="#DB4438" />
      </Link></li>
    </ul>
  )
  
}

export default MyLinks