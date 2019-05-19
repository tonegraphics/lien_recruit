import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Style from "../styles/components/header.module.scss"
import classNames from "classnames"
import headerMenu from "./bergerMenu";
import HunbergerMenu from "./bergerMenu";

const baseLink = "http://localhost:8000";

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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.url = window.location.href;
    this.contents = contents;
   }
  
  // コンポーネントの読み込み時に実行される
  componentWillMount() {
    this.contents.map((content) => {
      if(baseLink + content.link === this.url) {
        content.classes = classNames(
          Style.listItem,
          Style.current
        );
      } else {
        content.classes = classNames(
          Style.listItem
        );
      }
    });
    console.log(this.contents);
  }

  headerImage() {
    var headerIamge = (
      <div className={Style.firstImage}></div>
    );
    if(this.url === baseLink + this.contents[0].link) {
      headerIamge = (
        <div className={Style.homeImage}>
          <div className={Style.homeImage__message}>
            <strong>夢と誇りを持てる<br />社会のために</strong>
          </div>
        </div>
      );
    } else if(this.url === baseLink + this.contents[3].link || this.url === baseLink + this.contents[4].link) {
      headerIamge = (
        <div className={Style.secondImage}></div>
      );
    }
    return headerIamge;
  }

  headerMenu() {
    const listItems = this.contents.map((content) => 
      <div 
        key={content.link} 
        className={content.classes}>
        <Link to={content.link} className={Style.link}>{content.title}</Link>
      </div>
    );
    return(
      <div className={Style.headerMenu}>{listItems}</div>
    )
  }

  render() {
    return (
      <header>
        {this.headerImage()}
        <HunbergerMenu />
        {this.headerMenu()}
      </header>
      
    );
  }
}

export default Header
