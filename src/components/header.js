import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Style from "../styles/components/header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.pageList = ["りあん", "未来の保育士さんへ", "スタッフインタビュー", "見学", "募集要項", "りあんの魅力", "制度" ]
  }

  listItems() {
    const listItems = this.pageList.map((page, index) =>
      <div key={index} className={Style.listItem} id={index}>
        <Link to="#" className={Style.link} activeClassName={Style.activeLink}>{page}</Link>
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
