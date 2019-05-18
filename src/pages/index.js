import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Headline from "../components/headline";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Image /> */}
    <Headline title="INFORMATION" />
    <Headline title="CONTENTS" />
  </Layout>
)

export default IndexPage
