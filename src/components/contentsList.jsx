import React from 'react';
// import PropTypes from 'prop-types';
import Content from './content';
import Styles from '../styles/components/contentsList.module.scss';

const ContentsList = () => {
  const contents = [
    // CEOの画像がないので仮置き
    {
      image: 'interview01.jpg',
      title: '未来の保育士さんへ',
      body: 'りあんで働きたい方や興味を持っていただいた方へ向けた、代表からのメッセージです。'
    },
    {
      image: 'interview03.jpg',
      title: 'スタッフインタビュー',
      body: '働いているスタッフに、入社のきっかけや仕事内容・やりがい等について聞いてみました。'
    },
    {
      image: 'visit01.jpg',
      title: '見学',
      body: '働く環境を知りたい方は、是非見学におこし下さい。採用までの流れも説明しています。'
    },
    {
      image: 'visit03.jpg',
      title: '募集要項',
      body: '一日の仕事の流れと合わせて、パート・正規それぞれの募集要項について説明しています。'
    },
    {
      image: 'contents05.jpg',
      title: 'りあんの魅力',
      body: '魅力ある各教室の外観や室内の様子を写真で紹介しています。'
    },
    {
      image: 'welfare03.jpg',
      title: '制度',
      body: '働きやすい環境づくりを支える、社内制度の充実に力を入れております。'
    }
  ];
  return (
    <div className={Styles.list}>
      { contents.map((content) => {
        return (
          <Content
            image={content.image}
            title={content.title}
            body={content.body}
          />
        )
      })}
      {/* <Content 
        image="interview01.jpg"
        title="スタッフインタビュー"
        body="働いているスタッフに、入社のきっかけや仕事内容・やりがい等について聞いてみました。"
      />
      <Content 
        image="interview03.jpg"
        title="スタッフインタビュー"
        body="働いているスタッフに、入社のきっかけや仕事内容・やりがい等について聞いてみました。"
      /> */}
    </div>
  )
}

export default ContentsList