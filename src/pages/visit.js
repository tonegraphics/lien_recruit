import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import StaffCardList from "../components/staffCardList";


const VisitPage = () => (
  <Layout>
    <SEO title="Interview" />
    <Headline title="見学におこし下さい" />
    <Headline title="見学から採用までの流れ" />
  </Layout>
)

export default VisitPage