import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination   } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data =[
  {
    avatar: AVTR1,
    name:'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem quo maxime officiis corrupti temporibus aperiam saepe aspernatur sed est reiciendis necessitatibus dolor, quasi in tempora cumque placeat beatae optio.'
  },
  {
    avatar: AVTR2,
    name:'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem pariatur blanditiis iure recusandae animi itaque laudantium natus, fugiat ut dignissimos, officiis omnis totam quis, excepturi debitis perspiciatis ipsam optio odio.'
  },
  {
    avatar: AVTR3,
    name:'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem quo maxime officiis corrupti temporibus aperiam saepe aspernatur sed est reiciendis necessitatibus dolor, quasi in tempora cumque placeat beatae optio.'
  },
  {
    avatar: AVTR4,
    name:'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem quo maxime officiis corrupti temporibus aperiam saepe aspernatur sed est reiciendis necessitatibus dolor, quasi in tempora cumque placeat beatae optio.'
  },
]

const Testimonials = () => {
  return (
<section id='testimonials'>
  <h5>Review from clients</h5>
  <h2>Testomonials</h2>
  <Swiper className="container testimonials__container" 
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}

    pagination={{ clickable: true }}
 
  
  >
    {data.map(({avatar , name , review , index})=>{
      return (
        <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <img src={avatar}  />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
      )
    })}
   
  </Swiper>
</section>
  )
}

export default Testimonials
