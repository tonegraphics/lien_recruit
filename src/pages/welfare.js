import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import ContentsList from "../components/contentsList";
import Styles from "../styles/pages/welfare.module.scss"
import SubWelfare from "../components/subWalfare"

const WelfarePage = () => (
  <Layout>
    <SEO title="Welfare" />
    <Headline title="社内制度" />
    <Headline title="その他の制度" />
    <ContentsList />
  </Layout>
)

export default WelfarePage
