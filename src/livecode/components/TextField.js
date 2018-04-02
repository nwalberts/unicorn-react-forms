import React from 'react'

const TextField = (props) => {

  return(
    <input
      type="text"
      name="unicornConsumed"
      value={props.value}
      onChange={props.consumedHandler}
    />
  )
}

export default TextField
