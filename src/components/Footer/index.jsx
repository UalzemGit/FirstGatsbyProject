import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Iconsfooter = {
    Instagram: FaInstagramSquare,
    Github: FaGithubSquare,
    Linkedin: FaLinkedin
}



const Footer = () => {
    const {
        site: {
          siteMetadata: {
              socialMedia: {
                  github, 
                  instagram,
                  linkedin,
                },
              copyright,
              description 
          }
        }
      } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
            socialMedia {
                github 
                instagram
                linkedin
              }
            copyright
            description 
        }
      }
    }
  `)
    return(
       <div className="bg-dark">
        <div className="container">
            <div className="row text-white py-4 mt-5">
               <div className="col-6">
                {description}
               </div>
               <div className="col-6 d-flex justify-content-center align-items-center icons-d-footer">
                <a href={instagram} target="_blank">< Iconsfooter.Instagram/></a>
                <a href={github} target="_blank">< Iconsfooter.Github/></a>
                <a href={linkedin} target="_blank">< Iconsfooter.Linkedin/></a>
             
             
              
               </div>
               <div className="col-12 d-flex justify-content-center">
               {copyright}
               </div>
            </div>
        </div>
       </div>
    )
}


export default Footer


/*
<FaInstagram className='footer-icon-contact-size' />
<FaGithubSquare className='footer-icon-contact-size' />
<FaLinkedin className='footer-icon-contact-size' />
*/