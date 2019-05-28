import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import WelfareList from "../components/welfareList";
import Styles from "../styles/pages/welfare.module.scss"
import SubWelfare from "../components/subWelfare"

const subWalfareItems = [
    {
        name: "~ 懇談会や交流会がたくさん ~",
        text: "魔法の手帳とは 経営理念や将来設計、行動指針といった働くうえで大切な内容が記載されている手帳です。入社時、社員全員に配られます。"
    },
    {
        name: "~ りあん魔法の手帳がもらえる ~",
        text: "魔法の手帳とは 経営理念や将来設計、行動指針といった働くうえで大切な内容が記載されている手帳です。入社時、社員全員に配られます。"
    },
    {
        name: "~ 年休消化率 100% ~",
        text: "全社員が年休を消化しており、申請取得しやすい環境になっています。"
    },
    {
        name: "~ 年間の行事が決まっている ~",
        text: "年間行事のスケジュールが決まっているため、プライベートの用事や旅行の計画が立てやすいです。"
    },
    {
        name: "~ 育児奮闘中のママがたくさん ~",
        text: "子育て真っ最中のママが多いため、子どもの行事や病気の時に休みをもらうなど、お互いに協力し合って仕事をしています。"
    },
];

const WelfarePage = () => (
  <Layout url={"welfare"}>
    <SEO title="Welfare" />
    <Headline title="社内制度" />
    <WelfareList />
    <Headline title="その他の制度" />
    <div className={Styles.subWelfares}>
        {subWalfareItems.map((item) => (
            <SubWelfare name={item.name} text={item.text} />
        ))}    
    </div>    
  </Layout>
)

export default WelfarePage
