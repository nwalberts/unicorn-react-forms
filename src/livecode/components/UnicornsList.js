import React from 'react';

import UnicornTile from "./UnicornTile"

const UnicornsList = (props) => {
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
