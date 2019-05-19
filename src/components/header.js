import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Style from "../styles/components/header.module.scss"

const contents = [
  {
    title: "りあん",
    link: "/"
  },
  {
    title: "未来の保育士さんへ",
    link: "/message"
  },
  {
    title: "スタッフインタビュー",
    link: "/interview"
  },
  {
    title: "見学",
    link: "/visit"
  },
  {
    title: "募集要項",
    link: "/recruit"
  },
  {
    title: "りあんの魅力",
    link: "/classrooms"
  },
  {
    title: "制度",
    link: "/welfare"
  },

];

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems() {
    const listItems = contents.map((content) =>
      <div key={content.link} className={Style.listItem}>
        <a className={Style.link} href={content.link}>{content.title}</a>
      </div>
    );
    return(
      <div className={Style.listItems}>{listItems}</div>
    )
  }

  render() {
    return (
      <header>
        <div className={Style.image}>
          <div className={Style.message}>
            <strong class={Style.text}>夢と誇りを持てる<br />社会のために</strong>
          </div>
        </div>
        <div>{this.listItems()}</div>
      </header>
      
    );
  }
}

export default Header
