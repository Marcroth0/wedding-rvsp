import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
        <div className='contact__container'>
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Vänligen lämna information om namn på alla idioter som kommer, deras rank i Hearthstone, och deras allergier." required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact
