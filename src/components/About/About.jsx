import React, { useState } from 'react';
import './about.scss';
import img1 from "./img/homepage_desktop.png"
import img2 from "./img/homepage_tablet.png"
import img3 from "./img/homepage_mobile.png"
import { Us } from "./Us.jsx"
import { usInfo } from "./us.js"


export const About = () => {
  const members = usInfo.map((member) => (
    
      <Us
       about={member.about}
       profilePic={member.profilePic}
       name={member.name}
       linkedin={member.linkedin}
       git={member.git}
       fb={member.fb}
       fullName={member.fullName}
      freeTime={member.freeTime}
      motivation={member.motivation}
      common={member.common}
      />
    ))


  return (
    <>
    <section className="wrapper__homepage">
      <div className="intro intro__homepage">
        <h1>PetFinder</h1>
        <h2>Najděte ztraceného zvířecího parťáka<br /></h2>
        <div className="wireframes">
          <div className="img__wrapper img__wrapper--desktop">
            <img
              className="img__homepage img__homepage--desktop"
              //src={img1}
              alt="wireframe pro desktop"
            />
          </div>
          <div className="text__wrapper">
            <h3>V pohodlí domova</h3>
            <p>
              Snadné pátrání v přehledné mapě s možností filtrování ztrát a
              nálezů
            </p>
          </div>
        </div>
        <div className="wireframes">
          <div className="text__wrapper text__wrapper--tablet">
            <h3>Kdekoliv na cestách</h3>
            <p>Informace o útulcích ve vašem okolí</p>
          </div>
          <div className="img__wrapper img__wrapper--tablet">
            <img
              className="img__homepage img__homepage--tablet"
              //src={img2}
              alt="wireframe pro tablet"
            />
          </div>
        </div>
        <div className="wireframes">
          <div className="img__wrapper img__wrapper--mobile">
            <img
              className="img__homepage img__homepage--mobile"
              // src={img3}
              alt="wireframe pro mobil"
            />
          </div>
          <div className="text__wrapper">
            <h3>Na každém zařízení</h3>
            <p>Snadné vkládání informací o ztrátě a nálezu</p>
          </div>
<div className ="members">
          {members}
</div>
        </div>
      </div>
    </section>
    
    </>

  )
}