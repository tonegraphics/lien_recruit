import React from 'react';
import StaffCard from './staffCard';
// import Styles from '../styles/components/staffCardList.module.scss';

const StaffCardList = () => {
  const staffCardItem =[
    {
      id: 1,
      number: '01',
      name: '林 愛子',
      job: 'ことね教室 自閉症セラピスト',
      word: '「家庭と仕事の両立ができ、毎日が充実しています。」',
      image: 'interview01.jpg'
    },
    {
      id: 2,
      number: '02',
      name: '福田　恵莉',
      job: 'ことね教室 保育士',
      word: '「先輩方の指導が一つひとつ丁寧で、不安は無くなりました。」',
      image: 'interview02.jpg'
    },
    {
      id: 3,
      number: '03',
      name: '安河内 望月',
      job: '西徳前教室 保育士',
      word: '「成長する子どもたちを見て、一緒に喜びを感じることができます。」',
      image: 'interview03.jpg'
    },
    {
      id: 4,
      number: '04',
      name: '宮田 佳香',
      job: '西徳前教室 作業療法士',
      word: '「『子育ては皆でやるもの』という言葉を、職場でも大切にしています。」',
      image: 'interview04.jpg'
    },
  ];
  return (
    <div>
      { staffCardItem.map((item) => {
        return (
          <StaffCard
            id={item.id}
            number={item.number}
            name={item.name}
            job={item.job}
            word={item.word}
            image={item.image}
          />
        )
      })}
      
    </div>
  )
}

export default StaffCardList