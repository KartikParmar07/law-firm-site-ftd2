import React from 'react'
import style from './Text.module.css'

const Headings = (prop) => {
  return (
    <>
    <div className={style.heading}>{prop.text}</div>
    </>
  )
}

export default Headings