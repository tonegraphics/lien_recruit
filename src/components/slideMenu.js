import { Link } from "gatsby"
import React from "react"
import Style from "../styles/components/slideMenu.module.scss"

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
    title: "教室紹介",
    link: "/classrooms",
  },
  {
    title: "見学",
    link: "/visit"
  },
  {
    title: "制度",
    link: "/welfare",
  },
  {
    title: "募集要項",
    link: "/recruit",
  },
];

class SlideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.contents = contents;
        this.isAppeared = props.isAppeared;
        this.state = {
          isOpen: false
        };
        this.hundleClick = this.hundleClick.bind(this);
    }

    headerMenu() {
      const listItems = this.contents.map((content) => 
        <div 
          key={content.link} 
          className={Style.listItem}>
          <Link to={content.link} className={Style.link}>{content.title}</Link>
        </div>
      );
      if(this.state.isOpen) {
        return(
          <div className={Style.openMenu}>{listItems}</div>
        );
      } else {
        return(
          <div className={Style.closeMenu}>{listItems}</div>
        );
      }
    }

    hundleClick(props) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
      <div>
        <button className={Style.slideButton} onClick={this.hundleClick}>
          {this.state.isOpen ? "Close" : "Menu"}
        </button>
        {this.headerMenu()}
      </div>
    );
  }
}

export default SlideMenu