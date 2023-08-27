import React from "react";
import style from "./Intro.module.css";
import Headings from "../Text/Headings";
import Content from "../Text/Content";

const Intro = () => {
  return (
    <>
      <div className={style.intro}>
        <div className={style.part1}>
          <Headings text={"Let’s Introduce Ourself"}/>
        </div>
        <div className={style.line}></div>
        <div className={style.part2}>
          <div className={style.heading2}>Criminal Lawyer</div>
          <Content para={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequatduis enim velit mollit Exercitation.`}/>
        </div>
      </div>
    </>
  );
};

export default Intro;
