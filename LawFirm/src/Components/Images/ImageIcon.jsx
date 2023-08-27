import React from 'react'
import style from './ImageIcon.module.css'


const ImageIcon = (prop) => {
  return (
    <>
    <div className={style.image}>
        <img src={prop.img} alt="" />
    </div>
    </>
  )
}

export default ImageIcon