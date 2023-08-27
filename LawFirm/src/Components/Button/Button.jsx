import React from 'react'
import style from './Button.module.css'


const Button = (prop) => {
  return (
    <>
    <button type="submit" className={style.btn1}>{prop.btntxt}</button>
    </>
  )
}

export default Button