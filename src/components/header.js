import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/header.module.scss"
import classNames from "classnames"
import SlideMenu from "./slideMenu";

var contents = [
  {
    title: "りあん",
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
    title: "見学",
    link: "visit"
  },
  {
    title: "制度",
    link: "welfare",
  },
  {
    title: "募集要項",
    link: "recruit",
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.splitedUrl = typeof window !== 'undefined' && window.location.href.split('/');
    this.contents = contents;
    this.setMenuClass();
  }

  setMenuClass() {
    var rootLessContents = this.contents.slice(1);
    var findCurrent = false;
    console.log(this.contents);
    rootLessContents.map((content) => {
      if (this.splitedUrl.findIndex(item => item === content.link) !== -1) {
        content.classes = classNames(
          Styles.listItem,
          Styles.current
        );
        findCurrent = true;
      } else {
        content.classes = classNames(
          Styles.listItem
        );
      }
    })
    if (!findCurrent) {
      this.contents[0].classes = classNames(
        Styles.listItem,
        Styles.current
      );
    } else {
      this.contents[0].classes = classNames(
        Styles.listItem
      );
    }
    console.log(this.contents);
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
    if (this.splitedUrl.findIndex(item => item === "message" || item === "interview" || item === "classrooms") !== -1) {
      headerIamge = (
        <div className={Styles.firstImage}></div>
      );
    } else if(this.splitedUrl.findIndex(item => item === "visit" || item === "welfare" || item === "recruit") !== -1) {
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
