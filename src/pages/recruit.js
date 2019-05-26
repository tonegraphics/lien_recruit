import React from 'react';
import Layout from '../components/layout';
import Headline from '../components/headline';
import Styles from '../styles/pages/recruit.module.scss';

const Recruit = () => (
  <Layout>
    <Headline title='募集要項' />
    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>児童発達支援管理者</td>
      </tr>
      <tr>
        <th>応募資格</th>
        <td>児童発達支援管理者研修又はサービス管理責任者研修修了者、障がい福祉サービス又は保育所等の勤務3年以上の経験者</td>
      </tr>
      <tr>
        <th rowSpan='2'>勤務時間 <span>(シフト制)</span></th>
        <td>未就学クラス 8:30〜18:00 の間8時間</td>
      </tr>
      <tr>
        {/* <th></th> */}
        <td>放課後等デイサービス 10:00〜19:30 の間8時間</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>250,000円〜270,000円</td>
      </tr>
      <tr>
        <th>賞与</th>
        <td>基本給1.5ヶ月分</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>日・他(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>言語聴覚士・作業療法士・臨床心理士</td>
      </tr>
      <tr>
        <th>内容</th>
        <td>2歳〜5歳の発達の遅れが気になるお子様の療育支援</td>
      </tr>
      <tr>
        <th>勤務時間</th>
        <td>9:00〜18:00(応相談)</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>250,000円〜300,000円</td>
      </tr>
      <tr>
        <th>賞与</th>
        <td>基本給1.5ヶ月分</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>土日・祝(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>保育士又は児童指導員</td>
      </tr>
      <tr>
        <th>応募資格</th>
        <td>教諭免許又は児童福祉サービス2年以上経験者等</td>
      </tr>
      <tr>
        <th rowSpan='2'>勤務時間 <span>(シフト制)</span></th>
        <td>未就学クラス 8:30〜18:00 の間8時間</td>
      </tr>
      <tr>
        {/* <th></th> */}
        <td>放課後等デイサービス 10:00〜19:30 の間8時間</td>
      </tr>
      <tr>
        <th>給与</th>
        <td>210,000円</td>
      </tr>
      <tr>
        <th>賞与</th>
        <td>基本給1.5ヶ月分</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>日・他(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>保育士(パート)</td>
      </tr>
      <tr>
        <th rowSpan='2'>勤務時間</th>
        <td>未就学クラス 10:00〜15:00</td>
      </tr>
      <tr>
        {/* <th></th> */}
        <td>放課後等デイサービス 14:30〜18:30</td>
      </tr>
      <tr>
        <th>時給</th>
        <td>1,200円〜1,500円</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>日・他(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>障がい福祉サービス</td>
      </tr>
      <tr>
        <th>応募資格</th>
        <td>2年以上の経験者</td>
      </tr>
      <tr>
        <th rowSpan='2'>勤務時間</th>
        <td>未就学クラス 9:00〜15:00</td>
      </tr>
      <tr>
        {/* <th></th> */}
        <td>放課後等デイサービス 14:30〜18:30</td>
      </tr>
      <tr>
        <th>時給</th>
        <td>950円〜1,100円</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>日・他(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <table className={Styles.require}>
      <tr>
        <th>募集職種</th>
        <td>事務員</td>
      </tr>
      <tr>
        <th>勤務時間</th>
        <td>9:00〜16:00</td>
      </tr>
      <tr>
        <th>時給</th>
        <td>850円〜1,000円</td>
      </tr>
      <tr>
        <th>休日</th>
        <td>土日・祝・他(12/29〜1/3休み)</td>
      </tr>
      <tr>
        <th>勤務地</th>
        <td>飯塚市、嘉麻市内の教室</td>
      </tr>
    </table>

    <Headline title='1日の仕事の流れ' />
    <table className={Styles.timetable}>
      <tr>
        <th></th>
        <th>正社員</th>
        <th>パート</th>
      </tr>
      <tr>
        <td>8:30</td>
        <td>出勤</td>
        <td></td>
      </tr>
      <tr>
        <td>8:40</td>
        <td>送迎出発</td>
        <td></td>
      </tr>
      <tr>
        <td>10:15</td>
        <td>施設到着</td>
        <td>出勤</td>
      </tr>
      <tr>
        <td>10:30</td>
        <td>朝の会</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>11:40</td>
        <td>昼食</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>12:00</td>
        <td>休憩</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>13:00</td>
        <td>午後の活動</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>14:00</td>
        <td>おやつタイム</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>14:15</td>
        <td>帰り支度の援助</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>14:30</td>
        <td>バス送り出し</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>14:40</td>
        <td>掃除</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>14:50</td>
        <td>記録</td>
        <td>終礼</td>
      </tr>
      <tr>
        <td>15:00</td>
        <td>翌日の準備</td>
        <td>退社</td>
      </tr>
      <tr>
        <td>17:00</td>
        <td>終礼</td>
        <td></td>
      </tr>
      <tr>
        <td>17:30</td>
        <td>退社</td>
        <td></td>
      </tr>
    </table>

    <table className={Styles.timetable}>
      <tr>
        <th></th>
        <th>正社員</th>
        <th>パート</th>
      </tr>
      <tr>
        <td>10:30</td>
        <td>出勤・朝礼</td>
        <td></td>
      </tr>
      <tr>
        <td>11:00</td>
        <td>教材準備</td>
        <td></td>
      </tr>
      <tr>
        <td>13:00</td>
        <td>休憩</td>
        <td></td>
      </tr>
      <tr>
        <td>14:00</td>
        <td>送迎開始</td>
        <td>出勤</td>
      </tr>
      <tr>
        <td>15:30</td>
        <td>施設到着</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>17:00</td>
        <td>課題活動</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>17:40</td>
        <td>帰り支度の援助</td>
        <td>〃</td>
      </tr>
      <tr>
        <td>18:00</td>
        <td>帰りの会・送迎</td>
        <td>帰りの会・掃除</td>
      </tr>
      <tr>
        <td>18:30</td>
        <td>送迎</td>
        <td>退社</td>
      </tr>
      <tr>
        <td>19:00</td>
        <td>記録・終礼</td>
        <td></td>
      </tr>
      <tr>
        <td>19:30</td>
        <td>退社</td>
        <td></td>
      </tr>
    </table>


  </Layout>
)

export default Recruit