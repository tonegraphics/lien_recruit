import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import Headline from '../components/headline';
import SEO from "../components/seo";
import Styles from '../styles/pages/message.module.scss';

const Message = () => (
  <Layout>
    <SEO title='未来の保育士さんへ' />
    <Headline title='MESSAGE' />
    <div className={Styles.container} >
      <div className={Styles.message}>
        <h2>夢と誇りを持てる社会でありたい。</h2>
        <h3>代表あいさつ</h3>
        <p>
          このページを観覧して下さりありがとうございます。観覧して頂いている方は、お仕事を探していた方か興味を持って頂いている方だと思いますが、さて、ここで質問です。
        </p>
        <p>
          今、あなたは「夢」や「目標」がありますか？自分の将来に「夢」を抱き、夢に近づくために「学び」実践する。学び実践することで、可能性が広がる。
        </p>
        <p>
          私はこども達の可能性は無限大だと思っています。ということは、そう、こども達の可能性が無限大なら私たちの可能性も無限大！「夢」を持ち、こども達と共に学び「共育」できる。そして地域社会に「貢献」する。夢と誇りを持てる会社でありたいと考えています。
        </p>
        <p>
          その為、キャリアアップ制度や研修制度を多く設けています。こども達と一緒に誰もが夢や目標を持てる明るい未来を創りましょう！
        </p>
      </div>
      <div className={Styles.profile}>
        <Image filename='ceo.png' />
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
    </div>
    
  </Layout>
)

export default Message