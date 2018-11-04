import React from 'react'

const StarshipCard = ({name,length,model,starship_class,cargo_capacity})=>{
  return(
    <div className="w-30-ns dib bg-purple pa3 br3 shadow-3 ma2 grow w-100 tc">
      <h3>Name : {name}</h3>
      <p>Length: {length}</p>
      <p>Model: {model}</p>
      <p>Cargo Capacity:{cargo_capacity}</p>
      <p>Starship Class: {starship_class}</p>
    </div>
  )
}

export default StarshipCard; 
