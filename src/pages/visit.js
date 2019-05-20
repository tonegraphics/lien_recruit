import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import Step from '../components/step'


const VisitPage = () => (
  <Layout>
    <SEO title="Interview" />
    <Headline title="見学におこし下さい" />
    <Headline title="見学から採用までの流れ" />
    <Step />
  </Layout>
)

export default VisitPage