import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/homeButton.module.scss"

class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.splitedUrl = typeof window !== 'undefined' && window.location.href.split('/');
    }

    tailOf(number) {
        return this.splitedUrl[this.splitedUrl.length - number];
      }

    render() {
        if (this.tailOf(1) !== "") {
            return (
                <Link to={this.homeLink} className={Styles.homeButton}>Home</Link>
            );
        } else {
            return (<div></div>);
        }
        
    }
}

export default HomeButton