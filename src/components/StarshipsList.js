import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipsList = ({starships})=>{
  const list = starships.map((starship,i)=>{
    return (<StarshipCard key={i} name={starship.name} length={starship.length} model={starship.model} starship_class={starship.starship_class} cargo_capacity={starship.cargo_capacity} />)
  })

  return(
    <div className="flex flex-wrap">
      {list}
    </div>
  )
}

export default StarshipsList;