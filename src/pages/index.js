import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import ContentsList from "../components/contentsList";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Image /> */}
    <Headline title="INFORMATION" />
    <Headline title="CONTENTS" />
    <ContentsList />
  </Layout>
)

export default IndexPage
