import React from 'react';

import UnicornTile from "./UnicornTile"

const UnicornMealsList = (props) => {
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

export default UnicornMealsList;
