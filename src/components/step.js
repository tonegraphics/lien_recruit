import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/step.module.scss"

const stepItems = [
    {
        id: 1,
        name: "お問い合わせ"
    },
    {
        id: 2,
        name: "見学"
    },
    {
        id: 3,
        name: "面接"
    },
    {
        id: 4,
        name: "内定"
    }
];

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.stepItems = stepItems;
    }

    step() {
        const stepItems = this.stepItems.map((item) =>
            <div className={Styles.stepItems__stepItem}>
                <p className={Styles.stepItems__stepItem__number}>{item.id}</p>
                <p className={Styles.stepItems__stepItem__name}>{item.name}</p>
            </div>
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