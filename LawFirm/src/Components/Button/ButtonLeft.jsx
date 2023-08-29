import React from 'react'
import style from './Button.module.css'


const ButtonLeft = (prop) => {
  return (
    <>
    <button type="submit" className={style.btnleft}>{prop.btntxt}</button>
    </>
  )
}

export default ButtonLeft