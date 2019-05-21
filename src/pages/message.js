import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import Headline from '../components/headline';
import Styles from '../styles/pages/message.module.scss';

const Message = () => (
  <Layout>
    <Headline title='MESSAGE' />
    <div className={Styles.container} >
      <div className={Styles.profile}>
        <Image filename='staff01.png' />
        <h3>三木 千恵美</h3>
        <ul>
          <li>株式会社Lien 代表取締役</li>
          <li>1986年生まれ</li>
          <li>2010年 株式会社Lien 設立</li>
          <li>訪問介護、居宅介護を実施(飯塚市)</li>
          <li>児童通所事業を4教室で運営(飯塚市・嘉麻市)</li>
          <li>2019年現在 従業員45名</li>
        </ul>
      </div>
      <div className={Styles.message}>
        <h2>夢と誇りを持てる社会でありたい。</h2>
        <h3>代表あいさつ</h3>
      </div>
    </div>
    
  </Layout>
)

export default Message