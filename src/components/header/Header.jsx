import React from 'react'
import './header.css'

function header() {
  return (
    <section class="header__container">
      <h1>Jesper & Sofia</h1>
      <nav class="navMenu">
        <span class="left"></span>
        <a href="#contact">RSVP</a>
        <a href="#visit">Oss</a>
        <a href="#story">Plats</a>
        <span class="right"></span>
      </nav>
      <div class="img__container">
        <img src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="#"></img>
      </div>
    </section>
  )
}

export default header
