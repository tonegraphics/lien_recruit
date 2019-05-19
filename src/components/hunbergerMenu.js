
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Burger from '@animated-burgers/burger-rotate' 
import '@animated-burgers/burger-rotate/dist/styles.css' 

import Style from "../styles/components/header.module.scss"

var contents = [
    {
      title: "りあん",
      link: "/",
    },
    {
      title: "未来の保育士さんへ",
      link: "/message",
    },
    {
      title: "スタッフインタビュー",
      link: "/interview",
    },
    {
      title: "見学",
      link: "/visit"
    },
    {
      title: "募集要項",
      link: "/recruit",
    },
    {
      title: "りあんの魅力",
      link: "/classrooms",
    },
    {
      title: "制度",
      link: "/welfare",
    }
  
  ];

class HunbergerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.contents = contents;
    }

    headerMenu() {
        const listItems = this.contents.map((content) => 
          <div 
            key={content.link} 
            className={Style.listItem}>
            <Link to={content.link} className={Style.link}>{content.title}</Link>
          </div>
        );
        return(
          <div className={Style.headerMenu}>{listItems}</div>
        )
    }
    render() {
        return (this.headerMenu());
    }
}

export default HunbergerMenu