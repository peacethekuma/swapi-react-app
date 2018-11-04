import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetsList = ({planets})=>{
  const list = planets.map((planet,i)=>{
    return (<PlanetCard key={i} name={planet.name} climate={planet.climate} terrain={planet.terrain} gravity={planet.gravity} diameter={planet.diameter} />)
  })

  return(
    <div className="flex flex-wrap">
      {list}
    </div>
  )
}

export default PlanetsList;