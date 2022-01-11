import React, { useState } from "react";
import home1 from "../images/home1.png";
import home2 from "../images/home2.png";
import home3 from "../images/home3.png";
import cam from "../images/cam.svg";
import right from "../icons/right.svg";
import useInterval from "use-interval";
import { useTransition, animated } from "react-spring";

const img = [home1, home2, home3];

const Home = () => {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    setIndex(state => (state + 1) % img.length)
}

  useInterval(increaseIndex, 7000);
  const transitions = useTransition(img[index], {
    from: { opacity: 0,  },
    enter: { filter:'contrast(100%)', opacity: 1, },
    leave: {filter:'contrast(-300%)', opacity: 0},
    config: { duration: 3000 },
  });
  return (
    <div className="home container">
 
      <div className="homeTextContainer">
        <div className="homeText">
          <h1>
            See the <span className="worldWord">world</span> <br />
            through my lens</h1>
            <p>
              This is an exhibit of my greatest taken shots <br />
              by yours truly Mo.{" "}
            </p>
            <button className="btnContainer">
              <p>Explore</p>
              <figure>
                <img src={right} alt="" />
              </figure>
            </button>
   
        </div>
      </div>
      {transitions((styles, item) => (
       item && 
         <animated.img className="homeImage" src={item} alt="" style={{...styles}} />
      
      ))}
    </div>

  );
};

export default Home;
