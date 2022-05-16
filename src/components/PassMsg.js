import React from 'react'

function PassMsg({messages, deleteMsg}) {
  return (
    <ul>
        {messages.map((message, index)=>
        <li key={index} className='each-msg'>
            {message}
            <button onClick={()=>deleteMsg(index)}>X</button>
        </li>
        )}
    </ul>
  )
}

export default PassMsg