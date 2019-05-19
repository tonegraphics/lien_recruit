import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Style from "../styles/components/header.module.scss"
import classNames from "classnames"

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
    const headerIamge = (
      <div className={Style.image}>
          <div className={Style.message}>
            <strong>夢と誇りを持てる<br />社会のために</strong>
          </div>
      </div>
    );

    return headerIamge;
  }

  listItems() {
    const listItems = this.contents.map((content) => 
      <div 
        key={content.link} 
        className={content.classes}>
        <Link to={content.link} className={Style.link}>{content.title}</Link>
      </div>
    );
    return(
      <div className={Style.listItems}>{listItems}</div>
    )
  }

  render() {
    return (
      <header>
        {/* <div className={Style.image}>
          <div className={Style.message}>
            <strong>夢と誇りを持てる<br />社会のために</strong>
          </div>
        </div> */}
        {this.headerImage()}
        {this.listItems()}
      </header>
      
    );
  }
}

export default Header
