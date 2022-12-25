import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import { useState } from 'react';
import { initialState } from 'react';
import { setState } from 'react';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  
  const clearState = () => setState({ ...initialState })
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_ng8n56j', 'template_w4xmtcn', form.current, 'jczRTBykows7XYT9O')
      .then((result) => {
          console.log(result.text, result.status);
          clearState();
          setStatusMessage("Email sent success");
      }, (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} happened`);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
        <div className='contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Vänligen lämna information om namn på alla idioter som kommer, deras rank i Hearthstone, och deras allergier." required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        <p>{statusMessage}</p>
        </div>
    </section>
  )
}

export default Contact
