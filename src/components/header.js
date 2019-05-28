import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/header.module.scss"
import classNames from "classnames"
import SlideMenu from "./slideMenu";

var contents = [
  {
    title: "トップ",
    link: "",
  },
  {
    title: "未来の保育士さんへ",
    link: "message",
  },
  {
    title: "スタッフインタビュー",
    link: "interview",
  },
  {
    title: "教室紹介",
    link: "classrooms",
  },
  {
    title: "制度",
    link: "welfare",
  },
  {
    title: "見学",
    link: "visit"
  },
  {
    title: "募集要項",
    link: "recruit",
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.url = this.props.url;
    this.contents = contents;
    this.setMenuClass();
  }

  setMenuClass() {
    this.contents.map((content) => {
      if (content.link === this.url) {
        content.classes = classNames(
          Styles.listItem,
          Styles.current
        );
      } else {
        content.classes = classNames(
          Styles.listItem
        );
      }
    });
  }

  hero() {
    return (
      <div className={Styles.hero}>
        <Link to={"/"} className={Styles.hero__title}>
          りあん RECRUIT
        </Link>
      </div>
    );
  }

  headerImage() {
    var headerIamge = (
      <div className={Styles.homeImage}>
        <div className={Styles.homeImage__message}>
          <strong>夢と誇りを持てる<br />社会のために</strong>
        </div>
      </div>
    );
    if (this.url === this.contents[1].link || this.url === this.contents[2].link || this.url === this.contents[3].link) {
      headerIamge = (
        <div className={Styles.firstImage}></div>
      );
    } else if (this.url === this.contents[4].link || this.url === this.contents[5].link || this.url === this.contents[6].link) {
      headerIamge = (
        <div className={Styles.secondImage}></div>
      );
    }
    return headerIamge;
  }

  headerMenu() {
    const listItems = this.contents.map((content) => 
      <div 
        key={content.link} 
        className={content.classes}>
        <Link to={content.link} className={Styles.link}>{content.title}</Link>
      </div>
    );
    return(
      <div className={Styles.headerMenu}>{listItems}</div>
    )
  }

  render() {
    return (
      <header>
        <SlideMenu />
        {this.hero()}
        {this.headerImage()}
        {this.headerMenu()}
      </header>
      
    );
  }
}

export default Header
