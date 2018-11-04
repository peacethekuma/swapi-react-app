import React from 'react'

const FilmCard = ({title,episode_id,director,release_date,producer})=>{
  return(
    <div className="w-30-ns dib bg-pink pa3 br3 shadow-3 ma2 grow w-100 tc">
      <h3>Title : {title}</h3>
      <p>Episode: {episode_id}</p>
      <p>Director: {director}</p>
      <p>producer:{producer}</p>
      <p>Release Date: {release_date}</p>
    </div>
  )
}

export default FilmCard; 
