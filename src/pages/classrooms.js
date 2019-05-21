import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import Step from '../components/step'
import Styles from "../styles/pages/classrooms.module.scss"
import Image from '../components/image';


const ClassroomsPage = () => (
  <Layout>
    <SEO title="Classrooms" />
    <Headline title="教室紹介" />
  </Layout>
)

export default ClassroomsPage