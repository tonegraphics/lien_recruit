import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import ContentsList from "../components/contentsList";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
<<<<<<< HEAD
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
=======
    {/* <Image /> */}
    <Headline title="INFORMATION" />
    <Headline title="CONTENTS" />
    <ContentsList />
>>>>>>> 6e875f41226a5fcf4a11697e5242760b8de2d4c6
  </Layout>
)

export default IndexPage
