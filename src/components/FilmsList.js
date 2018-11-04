import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({films})=>{
  const list = films.map((film,i)=>{
    return (<FilmCard key={i} title={film.title} director={film.director} episode_id={film.episode_id} release_date={film.release_date} producer={film.producer} />)
  })

  return(
    <div className="flex flex-wrap">
      {list}
    </div>
  )
}

export default FilmList;