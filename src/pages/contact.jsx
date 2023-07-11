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
					<div className="col-md-6 mb-5">
					<form>
						<div class="mb-3">
							
							<input
							type="text"
							class="form-control"
							id="exampleInputName"
							placeholder="Seu Nome"
							/>
						</div>
						<div class="mb-3">
							<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							placeholder="Email"
							/>
						</div>
						<div class="mb-3">
							<textarea
							type="textarea"
							class="form-control"
							rows="4"
							id="exampleFormControlTextarea1"
							></textarea>
						</div>

						<button type="submit" class="btn btn-primary">Submit</button>
                    </form>	
					</div>
					<div className="col-md-6">
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