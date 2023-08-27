import React from 'react'
import style from './Text.module.css'

const Heading3 = (prop) => {
  return (
    <>
    <div className={style.heading3}>{prop.text}</div>
    </>
  )
}

export default Heading3