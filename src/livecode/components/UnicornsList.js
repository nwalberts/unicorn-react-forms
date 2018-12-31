import React from 'react';

const UnicornsList = (props) => {
  console.log(props)
  let unicornArray = props.unicorns.map((unicorn) => {

    return(
      <li key={unicorn.unicornName}>
        {unicorn.unicornName}
      </li>
    )
  })

  return(
    <ul>
      {unicornArray}
    </ul>
  )
}

export default UnicornsList;
