import React from "react"
import Styles from "../styles/components/classroom.module.scss"
import Image from '../components/image';

class Classroom extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.images = props.images;
    }

    render() {
        return (
            <div className={Styles.classroom}>
                <p className={Styles.classroom__name}>{this.name}</p>
                <div className={Styles.classroom__images}>
                    <div className={Styles.classroom__images__image}>
                        <Image filename={this.images[0]} />
                    </div>
                    <div className={Styles.classroom__images__image}>
                        <Image filename={this.images[1]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Classroom