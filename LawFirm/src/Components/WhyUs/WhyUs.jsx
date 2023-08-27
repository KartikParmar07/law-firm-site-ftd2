import React from "react";
import Headings from "../Text/Headings";
import style from "./WhyUs.module.css";
import Card from "../Card/Card";

const WhyUs = () => {
  return (
    <>
      <div className={style.whyUsWrap}>
        <Headings text={`Why Choose us?`} />
        <div className={style.cards}>
          <Card
            text={`98% Success Rate`}
            para={`Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.`}
            btntxt={`Read More`}
          />
          <Card
            text={`100% Success Rate`}
            para={`Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.`}
            btntxt={`Read More`}
          />
          <Card
            text={`100% Success Rate`}
            para={`Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer.`}
            btntxt={`Read More`}
          />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
