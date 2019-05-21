import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import WelfareList from "../components/welfareList";
import Styles from "../styles/pages/welfare.module.scss"
import SubWelfare from "../components/subWalfare"

const WelfarePage = () => (
  <Layout>
    <SEO title="Welfare" />
    <Headline title="社内制度" />
    <WelfareList />
    <Headline title="その他の制度" />
  </Layout>
)

export default WelfarePage
