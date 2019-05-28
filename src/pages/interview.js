import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import StaffCardList from "../components/staffCardList";


const InterviewPage = () => (
  <Layout url={"interview"}>
    <SEO title="Interview" />
    <Headline title="STAFF INTERVIEW" />
    <StaffCardList />
  </Layout>
)

export default InterviewPage