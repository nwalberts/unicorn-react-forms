import React from 'react';

import UnicornTile from "./UnicornTile"

const UnicornsList = (props) => {
  // debugger;
  let unicornArray = props.unicorns.map((unicorn) => {

    return(
      <UnicornTile
        unicorn={unicorn}
      />
    )
  })

  return(
    <ul>
      {unicornArray}
    </ul>
  )
}

export default UnicornsList;
