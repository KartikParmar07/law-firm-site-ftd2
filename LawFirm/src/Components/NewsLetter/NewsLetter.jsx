import style from "./NewsLetter.module.css";
import Headings from "../Text/Headings";

const NewsLetter = () => {
  return (
    <div className={style.newsLetterWrapper}>
        <Headings text="Subscribe Our Newsletter" />

        <div className={style.NewsLetterCont}>
            <div className={style.inputContainer}>
              <input type="text" className={style.inputField} />
              <label className={style.inputLabel}>Name:</label>
            </div>
            <div className={style.inputContainer}>
              <input type="email" className={style.inputField} />
              <label className={style.inputLabel}>Enter Your Email:</label>
            </div>
            <div><button className={style.Formbutton}>SEND</button></div>
        </div>
    </div>
  );
};

export default NewsLetter;
