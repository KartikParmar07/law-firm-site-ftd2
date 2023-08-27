import React from 'react'
import style from './Button.module.css'


const Button2 = (prop) => {
  return (
    <>
    <button type="submit" className={style.btn2}>{prop.btntxt}</button>
    </>
  )
}

export default Button2