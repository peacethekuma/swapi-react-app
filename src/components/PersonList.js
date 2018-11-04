import React from 'react';
import PersonCard from './PersonCard';

const PersonsList = ({ persons }) => {
  const allPersons = persons.map((person, i) => {
    return (<PersonCard key={i} name={person.name} height={person.height} gender={person.gender} birth_year={person.birth_year} />)
  })


  return (
    <div className="flex flex-wrap">
      {allPersons}
    </div>
  )
}

export default PersonsList;