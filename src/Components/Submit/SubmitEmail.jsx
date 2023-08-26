import React from 'react'
import style from './SubmitEmail.module.css'

const SubmitEmail = () => {
  return (
    <>
    <form className={style.inline}>
        <div className={style.inputIcons}>
        <i className={`fa fa-envelope ${style.icon}`}></i>
    <input type="text" className={style.inputfield} placeholder="Enter your eamil address"/>
        </div>
        <button type="submit">Let's Talk</button>
    </form>
    </>
  )
}

export default SubmitEmail