import React from "react"
import Styles from "../styles/components/step.module.scss"
import classNames from "classnames"

const stepItems = [
    {
        id: 1,
        name: "お問い合わせ",
        text: "お問合せフォームよりお気軽にお問合せ下さい。"
    },
    {
        id: 2,
        name: "見学",
        text: "ご希望の事業所を見学できます。現役の職員が案内を致しますので、見学の際に不安な事はお尋ね下さい。"
    },
    {
        id: 3,
        name: "面接",
        text: "見学後に面接を行います。履歴書と職務経歴書をご持参下さい。"
    },
    {
        id: 4,
        name: "内定",
        text: "後日内定通知書が届きます。記載された日時に指定の場所にお越し頂き、入社オリエンテーションを行います。"
    }
];

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.stepItems = stepItems;
    }

    stepItem(item) {
        const itemClass = item.id === 4 ?
            classNames(
                Styles.stepItems__stepItem,
                Styles.yellow
            ) :
            classNames(
                Styles.stepItems__stepItem
            );

        return (
            <div>
                <div className={itemClass}>
                    <p className={Styles.stepItems__stepItem__number}>{item.id}</p>
                    <p className={Styles.stepItems__stepItem__name}>{item.name}</p>
                </div>
                <div className={Styles.text}>
                    <p>{item.text}</p>
                </div>
            </div>
            
        );
    }

    step() {
        const stepItems = this.stepItems.map((item) =>
            this.stepItem(item)
        );
        return (
            <div className={Styles.stepItems}>{stepItems}</div>
        );
    }

    render() {
        return this.step();
    }
}

export default Step