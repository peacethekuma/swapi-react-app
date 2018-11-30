import React from 'react';

const CategoryButton = (props) => {
  
  const colorClassTable = {
    people: 'bg-yellow',
    planets: 'bg-green',
    species: 'bg-blue',
    starships: 'bg-purple',
    films: 'bg-pink'
  };

  const colorClass = colorClassTable[props.category];

  if (props.category === props.route) {
    return (
      <div className="w-20">
        <button className={"f3-ns link dim ph3-l pv2 mb2 white bg-near-black f7 " + colorClass } onClick={() => props.onButtonCategorySelection(`${props.category}`)}>{props.category}</button>
      </div>
    )
  } else {
    return (
      <div className="w-20">
        <button className="f3-ns link dim ph3-l pv2 mb2 white bg-near-black f7" onClick={() => props.onButtonCategorySelection(`${props.category}`)}>{props.category}</button>
      </div>
    )
  }

}

export default CategoryButton;