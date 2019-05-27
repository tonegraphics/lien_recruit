import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/homeButton.module.scss"

const baseLink = "http://localhost:8000";

class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.url = typeof window !== 'undefined' && window.location.href;
        this.homeLink = "/";
        console.log(this.url);
    }
    render() {
        if (this.url !== baseLink + this.homeLink) {
            return (
                <Link to={this.homeLink} className={Styles.homeButton}>Home</Link>
            );
        } else {
            return (<div></div>);
        }
        
    }
}

export default HomeButton