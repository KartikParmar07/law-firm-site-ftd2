import React from "react";
import style from "./Faq.module.css";
import Headings from "../Text/Headings";
import Content from "../Text/Content";
import Heading3 from "../Text/Heading3";
import CustomAccordion from "../Accordian/CustomAccordion";

const Faq = () => {
  return (
    <>
      <div className={style.faqWrap}>
        <div className={style.contain1}>
          <div className={style.faqTitle}>
          <Headings text="FAQ" />
          <Content
            para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
          />
          </div>
        </div>
        <div className={style.contain2}>
            <Heading3 text="Do I need a personal injury report?"/>
            <Content para="Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."/>
            <div className={style.accordionWrap}>
            <CustomAccordion AccTitle="How much is my case worth?" AccContent="Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint."/>
<CustomAccordion AccTitle="What should I do right after car accidect" AccContent="Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint."/>
<CustomAccordion AccTitle="How much is my case worth?" AccContent="Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint."/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
