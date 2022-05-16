import React from 'react'

function Input({value,handleChange}) {
  return (
    <div>
        <input
              value={value}
              type="text"
              id="input-text"
              onChange={(e)=>handleChange(e.target.value)}
            />
    </div>
  )
}

export default Input