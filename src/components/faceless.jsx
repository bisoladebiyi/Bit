import React from 'react'
import { images } from '../imdData'

const Faceless = () => {
    return (
        <div className="faceless">
            <div className="sectionText">
           <div>
               <p className="sectionTextNumbering">03<span>/3</span></p>
               <p className="sectionTextTitle">Faceless</p>
               <p className="sectionTextDesc">Personal shot of the most beautiful face ever <br /><span>Sep. ‘21</span></p>
           </div>
       </div>
       <div className="facelessImages">
       <div className="imgContainer">
           {images.map(({id, img})=> (
             
                   <img key={id} src={img} alt="" />
             
           ))}
             </div>
             <p>‘Faceless</p>
       </div>
        </div>
    )
}



export default Faceless
