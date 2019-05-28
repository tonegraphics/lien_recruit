import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import Classroom from '../components/classroom'
import Styles from "../styles/pages/classrooms.module.scss"
import Image from '../components/image';

const classroomInfo = [
    {
        name: "飯塚 西徳前教室",
        images: ["classroom01.jpg", "classroom02.jpg"],
    },
    {
        name: "飯塚 柏の森教室",
        images: ["header02.jpg", "classroom04.jpg"],
    },
    {
        name: "飯塚 忠隈教室",
        images: ["classroom05.jpg", "classroom06.jpg"],
    },
    {
        name: "嘉麻教室",
        images: ["classroom07.jpg", "classroom08.jpg"],
    }
];

const ClassroomsPage = () => (
    <Layout url={"classrooms"}>
    <SEO title="Classrooms" />
    <Headline title="教室紹介" />
    { classroomInfo.map((info) => (
        <Classroom name={info.name} images={info.images} />  
    )) }
  </Layout>
)

export default ClassroomsPage