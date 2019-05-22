import React from 'react';
import Styles from '../styles/components/subwelfare.module.scss';

class Subwelfare extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.text = props.text;
    }
    render() {
        return (
            <div className={Styles.subWelfare}>
                <h2 className={Styles.subWelfare__name}>{this.name}</h2>
                <p className={Styles.subWelfare__text}>{this.text}</p>
            </div>
        );
    }
}

export default Subwelfare