import React from "react";
import style from "./Hero.module.css";
import { ReactComponent as HeroImg } from "../../Assets/HeroImg.svg";
import SubmitEmail from "../Submit/SubmitEmail";
import Content from "../Text/Content";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.part1}>
        <div className={style.contentWrap}>
          <span className={style.line1}>You don’t have to </span>
          <span className={style.line2}>Fight them Alone.</span>
        </div>
        <div>
          <Content
            para={`Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, 
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, 
            hac massa gravida arcu interdum proin curae.`}
          />
        </div>
        <div>
          <SubmitEmail />
        </div>
      </div>

      <div className={style.part2}>
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
