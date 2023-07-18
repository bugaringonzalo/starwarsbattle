import React from 'react'
import './Cards.css'
import Cardi from './Card'

function Cards({characters}) {

  const left = characters.cardLeft.name ? characters.cardLeft : null;
  const right = characters.cardRight.name ? characters.cardRight : null


  return (
    <div className='cards'>
        <Cardi character={left} />
        <Cardi character={right} />
    </div>
  )
}

export default Cards