import React, { Fragment }from "react"
import { Navbar } from "../../common/components/Navbar"

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip, faEnvelopeSquare  } from '@fortawesome/free-solid-svg-icons';
import portrait from "../../common/assets/images/Homepage/portrait.jpeg";
import { Link } from "react-router-dom";
import { TextField, FormControl, InputLabel, Input, FormHelperText  } from '@material-ui/core';

import swal from "sweetalert"


import emailjs, { init } from 'emailjs-com';
import { useForm } from "./components/useForm";
init("user_87wcUEfSSEsLb90flVDmu");


export const ContactMe = () => {

  const initialValues = {
    name: "",
    email: "",
    message: ""
  }

  const validatation = (fieldValues = values) =>{
    let temp = {...errors};
    if('name' in fieldValues)
      temp.name = fieldValues.name!==""? "": "Your name can't be empty";
    if('email' in fieldValues)
      temp.email = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(fieldValues.email)? "": "This is not a valie email address";
    if('message' in fieldValues)
      temp.message = fieldValues.message.length>=10? "": "The message should be at least 10 letters"
    setErrors({
      ...temp
    })
    return Object.values(temp).every(x => x==0)
  }


  const {
    values,
    setValues,
    errors,
    setErrors,
    hasSubmitted,
    setHasSubmitted,
    handleInputChange,
    resetForm
  } = useForm(initialValues, validatation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validatation()){
      emailjs.sendForm('gmail','template_was8zam', e.target )
      .then((response) => {
        // success: reset form and show success confirmed page
        resetForm()
        console.log('SUCCESS!', response.status, response.text);
        swal("Awsome!", "Message sent. Thank you for letting me know", "success")
      }, (err) => {
        // failure not caused by incorrect inputs: keep the inputs and show failure page
        console.log('FAILED...', err);
        swal("Oops!", "Something went wrong", "error")

      });
    }else{
      // failure due to incorrect inputs
      setHasSubmitted(true) // validate onChange only after submission failed
    }
  }
  return(
    <form className="contactMe" onSubmit={(e)=>handleSubmit(e)}>
      <h3>Contact Me</h3>
      <TextField 
        onChange={handleInputChange} variant="outlined" fullWidth={true} autoComplete="off"
        label="Your Name"
        value={values.name}
        name="name"
        error={errors.name && errors.name!=""? true: false}
        helperText={errors.name}
      />
      <TextField
        onChange={handleInputChange} variant="outlined" fullWidth={true} autoComplete="off" 
        label="Email Address"
        value={values.email}
        name="email"
        error={errors.email && errors.email!=""? true: false}
        helperText={errors.email}
        />
      <TextField
        onChange={handleInputChange} variant="outlined" fullWidth={true} autoComplete="off" 
        label="Message"
        value={values.message}
        name="message"
        multiline={true}
        rows="4"
        rowsMax="4"
        placeholder="Type your message here..."
        error={errors.message && errors.message!=""? true: false}
        helperText={errors.message}
      />
      <input
        className="contactMe-submit"
        type="submit"
        value="Send Message"
      />
    </form>

  )
}