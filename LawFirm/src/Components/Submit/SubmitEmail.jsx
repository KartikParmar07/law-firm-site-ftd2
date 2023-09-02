import React from 'react'
import style from './SubmitEmail.module.css'
import Button from '../Button/Button'

const SubmitEmail = () => {
  return (
    <>
    <form className={style.inline}>
        <div className={style.inputIcons}>
        <i className={`fa fa-envelope ${style.icon}`}></i>
        <input type="text" className={style.inputfield} placeholder="Enter your email address"/>
        </div>
        <div className={style.btn}>
        <Button btntxt={`Let's Talk`}/>
        </div>
        
    </form>
    </>
  )
}

export default SubmitEmail