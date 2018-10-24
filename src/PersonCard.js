import React from 'react'

const PersonCard = (props)=>{
  return(
    <div className="dib bg-yellow pa3 br3 shadow-3 ma2 grow">
      <h3>Name : Luke Skywalker</h3>
      <p>Height: 172cm</p>
      <p>Gender: Male</p>
      <p>Birth Year: 19BBY</p>
    </div>
  )
}

export default PersonCard; 