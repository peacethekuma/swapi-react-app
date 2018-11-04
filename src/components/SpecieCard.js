import React from 'react'

const SpecieCard = ({name,average_height,average_lifespan,classification,language})=>{
  return(
    <div className="w-30-ns dib bg-blue pa3 br3 shadow-3 ma2 grow w-100 tc">
      <h3>Name : {name}</h3>
      <p>Average Height: {average_height}</p>
      <p>Average Lifespan: {average_lifespan}</p>
      <p>Language:{language}</p>
      <p>Classification: {classification}</p>
    </div>
  )
}

export default SpecieCard; 
