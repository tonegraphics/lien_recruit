import { Link } from "gatsby"
import React from "react"
import Styles from "../styles/components/homeButton.module.scss"

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

class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.splitedUrl = typeof window !== 'undefined' && window.location.href.split('/');
        this.contents = contents;
    }

    tailOf(number) {
        return this.splitedUrl[this.splitedUrl.length - number];
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

    render() {
        if (this.isIn(this.splitedUrl, this.contents[1].link) || this.isIn(this.splitedUrl, this.contents[2].link) || this.isIn(this.splitedUrl, this.contents[3].link) || this.isIn(this.splitedUrl, this.contents[4].link) || this.isIn(this.splitedUrl, this.contents[5].link) || this.isIn(this.splitedUrl, this.contents[6].link)) {
            return (
                <Link to={this.homeLink} className={Styles.homeButton}>Home</Link>
            );
        } else {
            return (<div></div>);
        }
        
    }
}

export default HomeButton