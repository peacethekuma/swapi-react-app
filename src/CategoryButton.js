import React from 'react';

const CategoryButton = (props) => {
  return (
    <div className="w-20">
      <button  className="f3-ns link dim ph3-l pv2 mb2 white bg-near-black f7" onClick={() => props.onButtonCategorySelection(`${props.category}`)}>{props.category}</button>
    </div>
  )
}

export default CategoryButton;