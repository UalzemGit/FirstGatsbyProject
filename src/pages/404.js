import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>NÃO ACHEI NADA MY BROTHER...... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
