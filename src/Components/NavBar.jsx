import React from 'react'
import './NavBar.css'
import Search from './Search'
import Random from './Random'
import Button from '@mui/material/Button'

function NavBar({search, addList, random}) {
  return (
    <div>
        <div className='navbar'>
            <Search search={search} cardLocation='left' />
            <Random random={random} cardLocation='left'/>
            <Button variant="contained" onClick={addList}>All Characters</Button>
            <Search search={search} cardLocation='right' />
            <Random random={random} cardLocation='right'/>
        </div>
    </div>
  )
}

export default NavBar