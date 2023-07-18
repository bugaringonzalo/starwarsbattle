import React from 'react'
import { Button } from '@mui/material'

function Random({random, cardLocation}) {
  return (
    <div>
      <Button variant='contained' color='error' onClick={() => random(cardLocation)}>Random</Button>
    </div>
  )
}

export default Random