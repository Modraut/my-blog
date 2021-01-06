import React, { Fragment }from "react"

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import handytasker from "./pic/handytasker.png";
import iais from "./pic/iais.png";
import jianshu from "./pic/jianshu.png";
import myBlog from "./pic/my-blog.png";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



export const Portfolio = () => {
  const projects = [
    {
      type: "Commercial Project",
      title: "InnerArt_InnerSoul",
      description: "Pulp You Media is developing this website as a platform for artists to present and sell their artworks to buyers",
      stack: "HTML, CSS/SASS, React/Redux/Hooks, node.js",
      pic: iais
    },
    {
      type: "Personal Project",
      title: "My-blog",
      description: "This is the responsive website we are on now. I will keep updating it with more feature. The next feature is getting feedback from visitor ",
      stack: "HTML, CSS/SASS, React/Redux/Hooks",
      pic: myBlog,
      github: "https://github.com/Modraut/my-blog"
    },
    {
      type: "Personal Project",
      title: "Handytasker",
      description: "This project is still under development. It is inspired by Airtasker",
      stack: "HTML, CSS/SASS, React/Redux/thunk, node.js, JWT",
      pic: handytasker,
      github:"https://github.com/Modraut/Handytasker_frontend"
    },
    {
      type: "Personal Project",
      title: "Jianshu",
      description: "The website is for users to publish thier articles. I did it to get familiar with React and styled-component",
      stack: "HTML, CSS/styled-component, React/Redux/thunk",
      pic: jianshu,
      github: "https://github.com/Modraut/Jianshu_project"
    }
  ]
  return(
    <div className="portfolio">
      {
        projects.map((item)=>{
          const {type, title, description, stack, pic, github } = item;
          return(
            <section className="portfolio-item">
              <div className="portfolio-item-pic">
                <img  src={pic} alt="" />
                <div className="portfolio-item-pic-cover"/>
              </div>
              <div className="portfolio-item-details" >
                <span>{type} </span>
                <h3>{title} </h3>
                <p>{description} </p>
                <p>Tech-stach: {stack} </p>
                <a href={github}>
                  <FontAwesomeIcon size="2x" icon={faGithubSquare} color="#CECECE" />
                </a>
              </div>
            </section>
          )
        })
      }
    </div>
  )
} 