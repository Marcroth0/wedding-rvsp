import React from 'react'
import './visit.css'
import FLWR from '../../assets/flower.png'

function Visit() {
  return (
    <section class="visit__section" id="visit">
        <small>Det vore för oss en ära om ni vill</small>
        <h1>Fullända vår dag med er närvaro</h1>
        <hr />
        <h1 class="visit__names">Jesper</h1>
        <span>&</span>
        <h1 class="visit__names">Sofia</h1>
        <hr />
        <h1>För Jesper har (äntligen) friat</h1>
        <small>Och dagen är kommen</small>
        <div>
          <img className='visit__flower' src={FLWR} alt='' />
        </div>
    </section>
  )
}

export default Visit
