import React from 'react'
import style from './Card.module.css'
import Heading3 from "../Text/Heading3";
import { ReactComponent as Icon } from "../../Assets/imgicon.svg";
import Content2 from "../Text/Content2";
import Button2 from "../Button/Button2";

const Card = (prop) => {
  return (
    <div className={style.card}>
            <Icon />
            <Heading3 text={prop.text} />
            <Content2
              para={prop.para}
            />
            <Button2 btntxt={prop.btntxt}/>
      </div>
  )
}

export default Card