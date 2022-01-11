import React from 'react'
import tatia from '../images/tatia.png'

const Tatia = () => {
    return (
        <div className="tatia">
            <div className="sectionText">
            <div>
               <p className="sectionTextNumbering">02<span>/3</span></p>
               <p className="sectionTextTitle">Perfect dress</p>
               <p className="sectionTextDesc">A dress collection shot for a brand <br /><span>June ‘21</span></p>
           </div>
       </div>
       <div className="tatiaImageContainer">
           <p>Tatia</p>
           <div className="tatiaImages">
               <div className="tatiaImage">
                <img src={tatia} alt="" />
               </div>
               <div className="tatiaImage"><img src={tatia} alt="" />
               <p>Bello</p>
               </div>
           </div>
       </div>
        </div>
    )
}

export default Tatia
