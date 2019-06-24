import React from 'react'

const UnicornTile = (props) => {
  // debugger
  return(
    <li>
      {props.unicorn.unicornName} | {props.unicorn.hornLength}
    </li>
  )
}

export default UnicornTile
