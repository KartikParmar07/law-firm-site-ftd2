import React from "react";
import style from "./Card.module.css";
import Heading3 from "../Text/Heading3";
import { ReactComponent as Icon } from "../../Assets/imgicon.svg";
import Content2 from "../Text/Content2";
import Button2 from "../Button/Button2";

const Card = (prop) => {
  return (
    <div className={prop.type === "team" ?style.teamCard:style.card} >
      {prop.type === "testimonial" ? (
        <img src={prop.img} className={style.tmCardimg} alt="img" />
      ) : prop.type === "team" ? (
        <img src={prop.img} className={style.teamCardimg} alt="img" />
      ) : (
        <Icon />
      )}

      {prop.type==="team"? 
      <div className={style.title}>
        <Heading3 text={prop.text} />
        <Content2 para={prop.para} />
      </div>
      : 
      <>
      <Heading3 text={prop.text} />
      {prop.type === "testimonial" ? <h5>{prop.designation}</h5> : ""}
      <Content2 para={prop.para} />
      {prop.type === "testimonial" ? (
        ""
      ) : prop.type === "team" ? (
        ""
      ) : (
        <Button2 btntxt={prop.btntxt} />
      )}
      </>
      }

      

    </div>
  );
};

export default Card;
