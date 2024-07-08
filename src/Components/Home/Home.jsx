import React from "react";
import "./Home.css";
import bgSpot from "./bg-spot.png";
import b1 from "./b1.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container ">
        <div className="main-heading">
          <div className="left-context">
            <p className="text-style font-class ">We Solve </p>
          </div>
          <div className="right-context">
            <p className="text-style font-class">Tough</p>
          </div>
          {/* <img className="bg-spot" src={bgSpot} alt="background color" /> */}
          <div className="left-context">
            <p className="text-style font-class">Problems For You</p>
          </div>
        </div>
        <div className="last-container">
          <Link className = 'text-link' to = '/contact'>
          <div className="circle-container-1">
            <div className="circle c-1"></div>
            <div className="cir-content">
              <p className="font-class">
               Discuss project
              </p>
            </div>
            <div className="circle c-2"></div>
          </div>
            </Link>
          <div className="us">
            <p className="font-class">
              <Link className = 'text-link' to="/whoweare">Who are we? &rarr;</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="second-content">
        <div className="l-content">
          <div className="question">
            <p className="ques font-class">Q. Got a Problem?</p>
            <p className="ans font-class">Ans. We provide</p>
            <p className="easy font-class">Easy</p>
            <p className="easier font-class">Easier</p>
            <p className="easiest font-class">Easiest<span className="soln font-class">Solution</span></p>
            {/* <p className="soln font-class">Solution</p> */}
            <p className="soln-link font-class"><Link className = 'text-link' to="/contact">Want a Solution &rarr;</Link></p>
          </div>
        </div>

        <div className="r-image">
          <img className="b1" src={b1} alt="bulb" />
        </div>
      </div>
    </>
  );
}

export default Home;
