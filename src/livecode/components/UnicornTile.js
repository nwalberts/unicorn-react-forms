import React from 'react'

const UnicornTile = (props) => {

  return(
    <li>
      {props.unicorn.unicornName} | {props.unicorn.unicornAge}
    </li>
  )
}

export default UnicornTile
