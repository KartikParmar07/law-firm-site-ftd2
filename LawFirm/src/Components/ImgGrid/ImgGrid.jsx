import React from 'react'
import style from './ImgGrid.module.css'
import Headings from '../Text/Headings'
import QuiltedImageList from './BasicImageList'

const ImgGrid = () => {
  return (
    <>
    <div className={style.gridWrap}>
      <Headings text={`Area of Practices`}/>
      <QuiltedImageList />
    </div>
    </>
  )
}

export default ImgGrid