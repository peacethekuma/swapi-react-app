import React from 'react'

const PersonCard = ({name,height,gender,birth_year})=>{
  return(
    <div className="w-30-ns dib bg-yellow pa3 br3 shadow-3 ma2 grow w-100 tc">
      <h3>Name : {name}</h3>
      <p>Height: {height}</p>
      <p>Gender: {gender}</p>
      <p>Birth Year: {birth_year}</p>
    </div>
  )
}

export default PersonCard; 