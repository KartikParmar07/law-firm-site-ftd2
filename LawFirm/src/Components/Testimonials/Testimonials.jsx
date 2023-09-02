import React from "react";
import style from "./Testimonials.module.css";
import Headings from "../Text/Headings";
import ButtonLeft from "../Button/ButtonLeft";
import ButtonRight from "../Button/ButtonRight";
import test1 from '../../Assets/Testimonial1.png';
import test2 from '../../Assets/Testimonial2.png';
import test3 from '../../Assets/Testimonial3.png';
import Banner from '../Banner/Banner'


const Testimonials = () => {
  return (
    <>
      <div className={style.containWrap}>
        <div className={style.contain1}>
          <div className={style.header}>
            <Headings text="What says our happy Clients" />
          </div>
          <div className={style.carouselNav}>
            <ButtonLeft btntxt="◀" />
            <ButtonRight btntxt="▶" />
          </div>
        </div>
        <div className={style.contain2}>
          <Banner cardObj={cardObj}/>
        </div>
      </div>
    </>
  );
};

const cardObj = [
  {type:"testimonial",
  img:test1,
  text:"Jane Cooper",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
},
{type:"testimonial",
  img:test2,
  text:"Devon Lane",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
},
{type:"testimonial",
  img:test3,
  text:"Robert Fox",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
},
{type:"testimonial",
  img:test3,
  text:"Robert Fox",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
},
{type:"testimonial",
  img:test3,
  text:"Robert Fox",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
},
{type:"testimonial",
  img:test3,
  text:"Robert Fox",
  designation:"Ceo of Hunt",
  para:`Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer. sit
aliqua dolor do amet sint. Velit officia`
}
]

export default Testimonials;
