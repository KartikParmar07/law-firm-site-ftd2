import React from 'react'
import style from './Text.module.css'

const Content = (prop) => {
  return (
    <>
    <span className={style.para}>{prop.para}</span>
    </>
  )
}

export default Content