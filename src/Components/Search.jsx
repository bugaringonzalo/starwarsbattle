import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


function Search({cardLocation, search}) {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  } 

  return (
    <div>
        <Input 
          type='text'
          name='username'
          value={Input.username}
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" color='success' onClick={() => search(input, cardLocation)}>Search</Button>

    </div>
  )
}

export default Search