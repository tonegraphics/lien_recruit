import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/header.module.scss"
import classNames from "classnames"
import SlideMenu from "./slideMenu";
import { type } from "os";

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
  }

  // array[-1] が効かないンゴ...
  tailOf(number) {
    return this.splitedUrl[this.splitedUrl.length - number];
  }

  fixedStaffUrl() {
    const subLink = this.tailOf(2);
    if (subLink === "interview") {
      return subLink;
    }
    return " ";
  }
  
  // コンポーネントの読み込み時に実行される
  componentWillMount() {
    const link = this.tailOf(1);
    const subLink = this.fixedStaffUrl();
    this.contents.map((content) => {
      if (link === content.link || subLink === content.link ) {
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
    const link = this.tailOf(1);
    var headerIamge = (
      <div className={Styles.firstImage}></div>
    );
    if(link === this.contents[0].link) {
      headerIamge = (
        <div className={Styles.homeImage}>
          <div className={Styles.homeImage__message}>
            <strong>夢と誇りを持てる<br />社会のために</strong>
          </div>
        </div>
      );
    } else if(link === this.contents[3].link || link === this.contents[4].link) {
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
