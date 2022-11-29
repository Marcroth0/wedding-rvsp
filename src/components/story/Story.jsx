import React from 'react'
import './story.css'
import RNG from '../../assets/rings.jpg'
import FLWR from '../../assets/flower.png'

const Story = () => {
  return (
    <section id="story">
        <div class="img__container">
            <img src={RNG} alt="#"></img>
        </div>
        <div class="info__container">
            <div class="info__article">
                <h1>Plats</h1>
                <hr />
                <p>Windows 95 - en lummig och spatiös maskin som vetter ut mot storslagna vyer av Windows ursprungliga screensaver. </p>
            </div>
            <div class="info__article">
                <h1>Klädkod</h1>
                <hr />
                <p>Furry</p>
            </div>
            <div class="info__article">
                <h1>Rank</h1>
                <hr />
                <p>Säkerställs vid insläpp. Lägre rank än Legend förbehåller vi rätten att neka inträde.</p>
            </div>
            <div>
                <img className='visit__flower' src={FLWR} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Story
