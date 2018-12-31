import React from 'react'

const TextField = (props) => {

  return(
    <input
      type="text"
      name="unicornName"
      value={props.content}
      onChange={props.unicornHandler}
    />
  )
}

export default TextField
