import React from 'react'
import './header.css'

function header() {
  return (
    <section class="header__container">
      <h1>Jesper & Excel</h1>
      <nav class="navMenu">
        <span class="left"></span>
        <a href="#">RSVP</a>
        <a href="#">plats</a>
        <a href="#">mat?</a>
        <a href="#">legend</a>
        <span class="right"></span>
      </nav>
      <div class="img__container">
        <img src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="#"></img>
      </div>
    </section>
  )
}

export default header
