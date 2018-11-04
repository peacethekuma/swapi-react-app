import React from 'react'
import CategoryButton from './CategoryButton';



const CategoriesList = (props) => {
  const list = ['people', 'planets', 'species', 'starships', 'films'];

  const buttonList = list.map((item, i) => {
    return <CategoryButton key={i} category={item} onButtonCategorySelection={props.onButtonCategorySelection} />
  })

  return (
    <div className="tc flex ">
      {buttonList}
    </div>
  )
}


export default CategoriesList;