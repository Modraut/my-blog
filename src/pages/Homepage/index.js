import React, { Fragment }from "react"
import { Navbar } from "../../common/components/Navbar"

import "./style.scss"
import portrait from "../../common/assets/images/Homepage/portrait.jpeg";
import { Link, NavLink } from "react-router-dom";
import MyLinks from "./MyLinks";


export const Homepage = () => {
  return(
    <div className="homepage">
      <div className="homepage__main">
        <div className="homepage__main__portrait">
          <img src={portrait} alt="portrait missing" /> 
        </div>  
        <div className="homepage__main__intro">
          <h3>Hello, I'm Chad Liu</h3>
          <p>I'm a passionate full-stack web developer</p>
          <MyLinks className="homepage__main__intro__links" /> 
          <div className="homepage__main__intro__button">
            <NavLink to="/portfolio"><button>Read More</button></NavLink>
          </div>
        </div>  
      </div>
    </div>
  )
}

