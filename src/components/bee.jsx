import React from 'react'
import bee1 from '../images/bee1.png'
import bee2 from '../images/bee2.png'

const Bee = () => {
    return (
        <div className="bee">
        <div className="sectionText">
           <div>
               <p className="sectionTextNumbering">01<span>/3</span></p>
               <p className="sectionTextTitle">Black & Beautiful</p>
               <p className="sectionTextDesc">Shots taken for series titled black and beautiful <br /><span>Aug. ‘20</span></p>
           </div>
       </div>
       <div className="beeImg">
        <img src={bee1} alt="" />
        <img src={bee2} alt="" />
        <img src={bee1} alt="" />

       </div>
       <div className="beeLetters">
           <p>B</p>
           <p>E</p>
           <p>E</p>
       </div>
        </div>
    )
}

export default Bee
