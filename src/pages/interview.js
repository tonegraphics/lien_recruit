import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import StaffCardList from "../components/staffCardList";


const InterviewPage = () => (
  <Layout>
    <SEO title="スタッフインタビュー" />
    <Headline title="STAFF INTERVIEW" />
    <StaffCardList />
  </Layout>
)

export default InterviewPage