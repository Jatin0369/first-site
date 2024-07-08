import React from "react";
import { data } from "./mockData";
import "./WhatWeDo.css";
import arrow from './arrow.png'
import { Link } from "react-router-dom";
function WhatWeDo() {
  return (
    <>
      <div className="heading">
        <h1 className="main-heading font-class">What We Do</h1>
      </div>
      <div className="slide-show">
        {data.map((item, index) =>
          index === 0 ? (
            <div className="card card-1">
                <img className="indi-pic-1" src={item.img} alt={item.id} />
              <div className="shadow">
                <p className="img-p font-class">{item.text}</p>
                <div className="arrow-cont">
                <img className='arrow' src={arrow} alt="arrow"/>
                </div>
              </div>
            </div>
          ) : (
              <div className="card">
                <img className="indi-pic-1" src={item.img} alt={item.id} />
              <div className="shadow">
                <p className="img-p font-class">{item.text}</p>
                <div className="arrow-cont">
                <img className='arrow' src={arrow} alt="arrow"/>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="buttons font-class">
        <p className='left-arrow'><Link className="text-link" to='/home'>&larr; Main</Link></p>
        <p className='right-arrow'><Link className="text-link" to='/whoweare'>What are we &rarr;</Link></p>
      </div>
    </>
  );
}

export default WhatWeDo;
