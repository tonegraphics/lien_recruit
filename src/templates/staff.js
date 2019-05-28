import React from 'react';
import Image from '../components/image';
import Headline from '../components/headline';
import Layout from '../components/layout';
import Styles from '../styles/templates/staff.module.scss';
import Question from './question';
import { Link } from 'gatsby';
import SEO from "../components/seo";

const Staff = ({ pageContext: { path, name, job, image, profile, question, answer} }) => (
  <Layout url={"interview"}>
    <SEO title="スタッフインタビュー" />
    <Headline title='PROFILE' />
    <div className={Styles.profile}>
      <div className={Styles.image}>
        <Image filename={image} />
      </div>    
      <div className={Styles.info}>
        <h2>{name}</h2>
        <h4>{job}</h4>
        <p>{profile}</p>
      </div>
    </div>
    <Headline title='INTERVIEW' />
    <Question
      number={1}
      question={question[0]}
      answer={answer[0]}
    />
    <Question
      number={2}
      question={question[1]}
      answer={answer[1]}
    />
    <Question
      number={3}
      question={question[2]}
      answer={answer[2]}
    />

    <Link to='interview' className={Styles.back}>
      <div>
        <h3>スタッフインタビュー一覧に戻る</h3>
      </div>
    </Link>
  </Layout>
)

export default Staff