import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="cont">
      <div className="heading-1">
        <h1 className="main-heading-1 font-class">Contact Us</h1>
      </div>
      <div className="flex-cont">
        <div className="form">
          <form>
            <p className="info-ask font-class">Want To discuss Problem?</p>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Hehe" />
          </form>
        </div>
        <div className="location font-class">
          <p className="size-1 head">Location</p>
          <p className=" rest">London, UK 07 Mason Knolls Lloydfurt WD6</p>
          <p className=" rest">9876543210</p>
        </div>
        <div className="links font-class">
          <p className="email size-1">Email</p>
          <p className="rest">agency@gmail.com</p>
          <p className="rest">owner@company.in</p>
        </div>
      </div>
      <div className="circle-container">
        <div className="circle-1 c-1"></div>
        <div className="cir-content-1">
          <p className="font-class">Discuss project</p>
        </div>
        <div className="circle-1 c-2"></div>
      </div>
      <div className="buttons font-class">
        <p className="left-arrow-1"><Link className = 'text-link' to ='/home'>&larr; Main</Link></p>
        <p className="right-arrow-1"><Link className = 'text-link' to = '/whatwedo'>What we do &rarr;</Link></p>
      </div>
    </div>
  );
}

export default Contact;
