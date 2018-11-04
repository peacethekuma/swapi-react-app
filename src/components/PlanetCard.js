import React from 'react'

const PlanetCard= ({name,climate,terrain,gravity,diameter})=>{
  return(
    <div className="w-30-ns dib bg-green pa3 br3 shadow-3 ma2 grow w-100 tc">
      <h3>Name : {name}</h3>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
      <p>Diameter:{diameter}</p>
      <p>Gravity: {gravity}</p>
    </div>
  )
}

export default PlanetCard; 