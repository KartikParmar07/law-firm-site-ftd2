import React from 'react'
import style from './Button.module.css'


const ButtonRight = (prop) => {
  return (
    <>
    <button type="submit" className={style.btnright}>{prop.btntxt}</button>
    </>
  )
}

export default ButtonRight;