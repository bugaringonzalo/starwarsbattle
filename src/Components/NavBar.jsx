import React from 'react'
import './NavBar.css'
import Search from './Search'
import Random from './Random'
import Button from '@mui/material/Button'

function NavBar() {
  return (
    <div>
        <div className='navbar'>
            <Search />
            <Random />
            <Button variant="" />
            <Search />
            <Random />
        </div>
    </div>
  )
}

export default NavBar