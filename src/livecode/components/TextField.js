import React from 'react'

const TextField = (props) => {

  return(
    <input
      name="unicornName"
      type="text"
      value={props.content}
      onChange={props.handleChange}
    />
  )
}

export default TextField
