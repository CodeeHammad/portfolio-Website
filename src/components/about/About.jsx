import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { LiaAwardSolid } from "react-icons/lia";
import { HiUsers } from "react-icons/hi";
import { PiFolderSimplePlusBold } from "react-icons/pi";



const About = () => {
  return (
    <section id='about'>

<h5>Get To Know</h5>
<h2>About Me</h2>

<div className="container about__container">
    <div className="about__me">

    <div className="about__me-image">
      <img src={ME} alt="about image" />
    </div>


    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
        <LiaAwardSolid  className='about__icon '/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>

        
        <article className="about__card">
        <HiUsers className='about__icon '/>
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>

        <article className="about__card">
        <PiFolderSimplePlusBold   className='about__icon '/>
          <h5>Projects</h5>
          <small>80+ completed projects</small>
        </article>


      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatibus eveniet? Perferendis, architecto! Nulla nobis officiis minus aliquam voluptatem beatae itaque voluptas sed ducimus tempore deleniti, iste eligendi totam qui?
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
</div>




    </section>
  )
}

export default About