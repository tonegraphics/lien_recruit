import React from "react"
import Styles from "../styles/components/footer.module.scss"

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.top}>
      <p>まずはお気軽にお問い合わせ下さい！</p>
      <div>
        <a href="#">LINE@</a>
        <a href="tel:0948-26-8700">Tel: 0948-26-8700</a>
        <a href="#">Mail</a>
      </div>
    </div>
    <div className={Styles.under}>
      <h2>株式会社Lien</h2>
      <a href="http://www.lien-inc.net/">オフィシャルサイトはこちらから</a>
    </div>
  </footer>
)

export default Footer