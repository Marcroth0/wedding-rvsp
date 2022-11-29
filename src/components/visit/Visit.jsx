import React from 'react'
import './visit.css'
import FLWR from '../../assets/flower.png'

function Visit() {
  return (
    <section class="visit__section">
        <small>Det vore för oss en ära om ni vill</small>
        <h1>Fullända vår dag med er närvaro</h1>
        <hr />
        <h1 class="visit__names">Jesper</h1>
        <span>&</span>
        <h1 class="visit__names">Excel</h1>
        <hr />
        <h1>Prästen behöver ha vittnen</h1>
        <small>Vi har redan pröjsat</small>
        <div>
          <img className='visit__flower' src={FLWR} alt='' />
        </div>
    </section>
  )
}

export default Visit
