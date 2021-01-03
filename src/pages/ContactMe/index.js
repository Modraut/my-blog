import React, { Fragment }from "react"
import { Navbar } from "../../common/components/Navbar"

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip, faEnvelopeSquare  } from '@fortawesome/free-solid-svg-icons';
import portrait from "../../common/assets/images/Homepage/portrait.jpeg";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';

import emailjs, { init } from 'emailjs-com';
init("user_87wcUEfSSEsLb90flVDmu");


export const ContactMe = () => {
  const handleSubmit = (e) => {
    // e.preventDefault();
    emailjs.sendForm('gmail','template_was8zam', e.target )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
  }
  return(
    <form className="contactMe" onSubmit={(e)=>handleSubmit(e)}>
      <h3>Contact Me</h3>
      <TextField 
        label="Your Name"
        variant="outlined"
        name="name"
        fullWidth="true"
      />
      <TextField
        label="Email Address"
        variant="outlined"
        name="email"
        fullWidth="true"
      />
      <TextField
        label="Message"
        variant="outlined"
        name="message"
        fullWidth="true"
        multiline="true"
        rows="4"
        rowsMax="4"
        placeholder="Type your message here..."
      />
      {/* <div className="contactMe-name">
        <label for="name" >Your Name</label>
        <input id="name" name="name" />
      </div>
      <div className="contactMe-email">
        <label for="email">Email address</label>
        <input id="email" name="email" />
      </div>
      <div className="contactMe-message">
        <label for="message">Message</label>
        <textarea id="message" name="message" />
      </div> */}
      <input
        className="contactMe-submit"
        type="submit"
        value="Send Message"
      />
    </form>
  )
}