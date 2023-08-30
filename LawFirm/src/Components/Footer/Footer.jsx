import React from 'react'
import style from './Footer.module.css'
import {ReactComponent as Logo} from "../../Assets/logo.svg"
import {ReactComponent as Insta} from "../../Assets/insta.svg"
import {ReactComponent as Fb} from "../../Assets/fb.svg"
import {ReactComponent as Tweet} from "../../Assets/tweet.svg"
import {ReactComponent as Pinterest} from "../../Assets/pinterest.svg"



const Footer = () => {
  return (
    <div className={style.foorterWrap}>
    <div className={style.nav}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.links}>
        <a href="/">Home</a>
        <a href="/">Attorneys</a>
        <a href="/">Practice Areas</a>
        <a href="/">About Us</a>
      </div>
      <div className={style.socialLinks}>
        <span className={style.social}><Insta /></span>
        <span className={style.social}><Fb /></span>
        <span className={style.social}><Tweet /></span>
        <span className={style.social}><Pinterest /></span>
      </div>
    </div>
    <div className={style.sign}>
      <span>© 2020 Acme. All right reserved.</span>
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
    </div>
    </div>
  )
}

export default Footer