import React from 'react'
import Headings from '../Text/Headings'
import style from './Team.module.css'
import Card from '../Card/Card'
import team1 from '../../Assets/Team1.png'
import team2 from '../../Assets/Team2.png'
import team3 from '../../Assets/Team3.png'
import team4 from '../../Assets/Team4.png'
import team5 from '../../Assets/Team5.png'
import team6 from '../../Assets/Team6.png'

const Team = () => {
  return (
    <>
    <div className={style.teamWrap}>
    <Headings text="Our Team"/>
    <div className={style.cards}>
    <div className={style.card}><Card type="team" img={team1} text="Danial Def" para="301 Cases" className={style.teamCard} /></div>
    <div className={style.card}><Card type="team" img ={team2} text="Sanfole" para="805 Cases" className={style.teamCard}/></div>
    <div className={style.card}><Card type="team" img ={team3} text="Cesforila" para="301 Cases" className={style.teamCard}/></div>
    <div className={style.card}><Card type="team" img ={team4} text="Colleen" para="301 Cases" className={style.teamCard}/></div>
    <div className={style.card}><Card type="team" img ={team5} text="Haldone" para="301 Cases" className={style.teamCard}/></div>
    <div className={style.card}><Card type="team" img ={team6} text="Nik Jeo" para="301 Cases" className={style.teamCard}/></div>
    </div>
    </div>
    </>
  )
}

export default Team