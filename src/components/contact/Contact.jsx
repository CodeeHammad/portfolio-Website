import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4l6v6ya', 'template_7bajlhk', form.current, '5FDfelCVLJ_cy9QMW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>CodeeHammad@gmail.com</h5>
            <a href="mailto:CodeeHammad@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine contact__option-icon/>

            <h4>Messenger</h4>
            <h5>CodeeHamamd</h5>
            <a href="https://m.me/earnest.achiever"  target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <RiWhatsappLine contact__option-icon />


            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/3339571888"  target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact