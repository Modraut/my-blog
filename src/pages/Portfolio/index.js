import React from "react"

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import handytasker from "./pic/handytasker.png";
import iais from "./pic/iais.png";
import jianshu from "./pic/jianshu.png";
import myBlog from "./pic/my-blog.png";
import pokemondic from "./pic/pokemon-dic.png"
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';



export const Portfolio = () => {
  const projects = [
    {
      title: "InnerArt_InnerSoul",
      type: "Commercial Project",
      description: "Pulp You Media is developing this website as a platform for artists to present and sell their artworks to buyers",
      stack: "HTML, CSS/SASS, React/Redux/Hooks, node.js",
      pic: iais
    },
    {
      title: "My-blog",
      type: "Personal Project",
      description: `This is the responsive website we are on now. I will keep updating it with more feature. Feel free to email me via the "Contact Me" page`,
      stack: "HTML, CSS/SASS, React/Redux/Hooks",
      pic: myBlog,
      github: "https://github.com/Modraut/my-blog",
      website: "http://my-blog-osvqq.ondigitalocean.app/"
    },
    {
      title: "PokemonDic",
      type: "Personal Project",
      description: "Integrated with update-to-date APIs, the website is developed for Pokémon fans to access all kinds of information about their favorite Pokémon",
      stack: "HTML, CSS/SASS, Material UI, Pokemon API, cookies",
      pic: pokemondic,
      github: "https://github.com/Modraut/PokemonDic",
      website: "http://pokemon-dic-hr9i8.ondigitalocean.app/"
    },
    {
      title: "Handytasker",
      type: "Personal Project",
      description: "A platform for users to post tasks and look for professionals. The website is inspired by Airtasker and under development",
      stack: "HTML, CSS/SASS, React/Redux/thunk, express, JWT",
      pic: handytasker,
      github: "https://github.com/Modraut/Handytasker_frontend",
      website: "http://3.26.78.56/"
    },
    {
      title: "Jianshu",
      type: "Personal Project",
      description: "The website is for users to publish thier articles. I did it to get familiar with React and styled-component",
      stack: "HTML, CSS/styled-component, React/Redux/thunk",
      pic: jianshu,
      github: "https://github.com/Modraut/Jianshu_project"
    }
  ]
  return (
    <div className="portfolio">
      {
        projects.map((item) => {
          const { type, title, description, stack, pic, github, website } = item;
          return (
            <section className="portfolio__item">
              <div className="portfolio__item__pic">
                <img src={pic} alt="" />
                <div className="portfolio__item__pic__cover" />
              </div>
              <div className="portfolio__item__details" >
                <span>{type} </span>
                <h3>{title} </h3>
                <p>{description} </p>
                <p>Tech-stach: {stack} </p>
                <a href={github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size="2x" icon={faGithubSquare} color="#CECECE" />
                </a>
                <a href={website} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon size="2x" icon={faLink} color="#CECECE" />
                </a>
              </div>
            </section>
          )
        })
      }
    </div>
  )
}