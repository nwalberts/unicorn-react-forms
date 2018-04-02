import React from 'react';

const UnicornMealsList = (props) => {
  console.log(props)
  let unicornArray = props.unicornMeals.map((unicorn) => {

    return(
      <li>
        {unicorn.unicornConsumed}
      </li>
    )
  })

  return(
    <ul>
      {unicornArray}
    </ul>
  )
}

export default UnicornMealsList;
