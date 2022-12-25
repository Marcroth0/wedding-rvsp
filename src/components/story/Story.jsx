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
                <p>En kyrka nära dig</p>
            </div>
            <div class="info__article">
                <h1>Klädkod</h1>
                <hr />
                <p>Det finaste plaggen du har. Vilket egentligen är relativt. Så om du finner dig som finast i en 80-tals jumpsuit med reflekterande material - var dig själv, kära gäst.</p>
            </div>
            <div class="info__article">
                <h1>Datum</h1>
                <hr />
                <p>13/4 - 2023</p>
                <p>18.00 är nedsläpp</p>
                <p>17.00 är margaritas</p>
            </div>
            <div>
                <img className='visit__flower' src={FLWR} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Story
