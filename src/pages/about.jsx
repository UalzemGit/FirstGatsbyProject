import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card2 from '../components/Card2'

const About = () => {

	return(
		 <Layout>
		<div className="container">
		<div className="row">
		<div className="col-12 py-4">
		<h1 className="text-gatsby">About Title</h1>
		<h2>About SubTitle</h2>
		</div>
		</div>
		</div>

		<div className="container">
		<div className="row">
		<div className="col-lg-4 col-md-6 col-12 mb-4">
		<Card2
		nameImage="foto01"
		titleCard="Card 01"
		textCard="Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Contrary to popular belief,  making it over 2000 years old. Richard McClintock, a Latin"
		colorButton="primary"
		/>
		</div>
		<div className="col-lg-4 col-md-6 col-12 mb-4">
		<Card2
		nameImage="foto02"
		titleCard="Card 02"
		textCard="It has roots in a piece of classical Latin literature. Contrary to popular belief, Lorem Ipsum is not simply random text. A from 45 BC, making it over 2000 years old. Richard McClintock, a Latin"
		colorButton="warning"
		/>
		</div>
		<div className="col-lg-4 col-md-6 col-12 mb-4">
		<Card2
		nameImage="foto03"
		titleCard="Card 03"
		textCard="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin"
		colorButton="danger"
		/>
		</div>
		</div>
		</div>

		
		</Layout>
		)
	
}

export const Head = () => <Seo title="Page about" />

export default About