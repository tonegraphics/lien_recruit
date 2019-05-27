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

  isIn(array, word) {
    var result = false;
    array.map((item) => {
      if (item === word) {
        console.log(item);
        result =  true;
      }
    });
    return result;
  }

  setMenuClass() {
    var rootLessContents = this.contents.slice(1);
    var findCurrent = false;
    rootLessContents.map((content) => {
      const result = this.isIn(this.splitedUrl, content.link);
      if (result) {
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
    var url = this.splitedUrl;
    const result1 = this.isIn(this.splitedUrl, this.contents[1].link) || this.isIn(this.splitedUrl, this.contents[2].link) || this.isIn(this.splitedUrl, this.contents[3].link);
    const result2 = this.isIn(this.splitedUrl, this.contents[4].link) || this.isIn(this.splitedUrl, this.contents[5].link) || this.isIn(this.splitedUrl, this.contents[6].link);
    if (result1) {
      headerIamge = (
        <div className={Styles.firstImage}></div>
      );
    } else if(result2) {
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
