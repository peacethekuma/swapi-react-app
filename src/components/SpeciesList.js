import React from 'react';
import SpecieCard from './SpecieCard';

const SpeciesList = ({species})=>{
  const list = species.map((specie,i)=>{
    return (<SpecieCard key={i} name={specie.name} average_height={specie.average_height} average_lifespan={specie.average_lifespan} language={specie.language} classification={specie.classification} />)
  })

  return(
    <div className="flex flex-wrap">
      {list}
    </div>
  )
}

export default SpeciesList;