import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
   <section id="experience">
<h5>What Skills I Have</h5>
<h2>My Experience</h2>
<div className="container experience__container">
  <div className="experience__frontend">
    <h3>Frontend Experience</h3>
    <div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon' />
      <div><h4>HTML</h4>
      <small className='text-light'>Experience</small>  </div>
      </article>

      
      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
      <div>
            <h4>CSS</h4>
            <small className='text-light'>Experience</small>
      </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
           <h4>Javascript</h4>
           <small className='text-light'>Intermediate</small>
      </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
     <div>
          <h4>BootStrap</h4>
          <small className='text-light'>Beginner</small>
     </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
     <div>
          <h4>Tailewind</h4>
          <small className='text-light'>Intermediate</small>
     </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
     <div>
     <h4>React</h4>
      <small className='text-light'>Experience</small>
     </div>
      </article>


    </div>

  </div>
  <div className="experience__backend">
  <div className="experience__frontend">
    <h3>Backend Experience</h3>
    <div className="experience__content">
      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
     
     <div>
          <h4>Node Js</h4>
          <small className='text-light'>Experience</small>
     </div>
      </article>

      
      <article className="experience__details">
      <BsPatchCheckFill className='experience__details-icon' />
      <div>
          <h4>Mango DB</h4>
          <small className='text-light'>Experience</small>
      </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
    
    <div>
        <h4>Python</h4>
        <small className='text-light'>Intermediate</small>
    </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
   <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Beginner</small>
   </div>
      </article>

      <article className="experience__details">
      <BsPatchCheckFill  className='experience__details-icon'/>
     
     <div>
          <h4>Express Js</h4>
          <small className='text-light'>Intermediate</small>
     </div>
      </article>
    </div>

  </div>
  </div>
</div>
   </section>
  )
}

export default Experience