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
               <div className="col-md-6  mb-4 text-center">
                {description}
               </div>
               <div className="col-md-6  mb-4 d-flex justify-content-center justify-content-md-end align-items-center icons-d-footer">
                <a href={instagram} target="_blank" rel="noopener noreferrer">< Iconsfooter.Instagram/></a>
                <a href={github} target="_blank" rel="noopener noreferrer">< Iconsfooter.Github/></a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">< Iconsfooter.Linkedin/></a>
               </div>
            </div>
        </div>
        <div className="container-fluid copyright-sect">
          <div className="row text-white py-3">
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