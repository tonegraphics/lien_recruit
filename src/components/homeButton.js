import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../styles/components/header.module.scss"
import classNames from "classnames"
import SlideMenu from "./slideMenu";

class homeButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link to={"/"} className={Styles.homeButton}>Home</Link>
        );
    }
}

export default homeButton