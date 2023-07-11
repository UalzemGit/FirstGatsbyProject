import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

import { MdMarkAsUnread, MdPhoneEnabled, MdEditLocation } from "react-icons/md";





	const Contact = () => {

	return(
		 <Layout>
			<div className="container">
				<div className="row">
					<div className="col-12 py-4">
						<h1 className="text-gatsby">Contact Title</h1>
						<h2>Contact SubTitle</h2>
					</div>
					<div className="col-6">
						<ul class="list-group">
							<li class="list-group-item"><MdMarkAsUnread className='icon-contact-size' />Email</li>
							<li class="list-group-item"><MdPhoneEnabled className='icon-contact-size' />Telefone</li>
							<li class="list-group-item"><MdEditLocation className='icon-contact-size' />Localização</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
		)
	
}

export const Head = () => <Seo title="Page contact" />

export default Contact