import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from '../components/headline';
import Step from '../components/step'
import Styles from "../styles/pages/visit.module.scss"
import Image from '../components/image';


const VisitPage = () => (
  <Layout>
    <SEO title="Interview" />
    <Headline title="見学におこし下さい" />
    <div className={Styles.top}>
        <p className={Styles.top__text}>
            りあんで働きたいと考えている方・興味をお持ちの方は<br />
            是非一度、私達の教室へ見学におこし下さい!!
        </p>
        <div className={Styles.top__images}>
            <div className={Styles.top__images__image} >
                <Image filename={"visit01.jpg"} />
            </div>
            <div className={Styles.top__images__image} >
                <Image filename={"visit02.jpg"} />
            </div>
        </div>
    </div> 
    <Headline title="見学から採用までの流れ" />
    <Step />
    <Headline title="説明会のご案内" />
    <div className={Styles.briefing}>
        <div className={Styles.briefing__text}>
            <p> 
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
                説明会の詳細を伝える文章が記載されます。
            </p>
        </div>   
        <div className={Styles.briefing__image} >
            <Image filename={"visit03.jpg"} />
        </div>
    </div>   
  </Layout>
)

export default VisitPage