import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1 className="text-gatsby">Welcome to Gatsbyyy!</h1>
          <p>TESTANDO O PARÁGRAFO AQUI.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
