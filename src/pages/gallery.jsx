import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () =>{
    const {gallery} = useStaticQuery(graphql`
        query {
            gallery: allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/images/"}}) {
            nodes {
                id
                childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                   ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
            }
        }
    `)
    return(
    <Layout>
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-gatsby mb-4">Gallery</h1>
                </div>
            </div>
            <div className="row row-gallery-here">
                {gallery.nodes.map(image => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <Img key={image.id} fluid={image.childImageSharp.fluid} alt="IMG Gallery" />
                    </div>
                ))}
            </div>
        </div>
    </Layout>    
    )
}


export const Head = () => <Seo title="Page gallery" />

export default Gallery