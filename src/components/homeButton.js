import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/homeButton.module.scss"

class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.url = this.props.url;
    }

    render() {
        if (this.url !== "") {
            return (
                <Link to={this.homeLink} className={Styles.homeButton}>Home</Link>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default HomeButton