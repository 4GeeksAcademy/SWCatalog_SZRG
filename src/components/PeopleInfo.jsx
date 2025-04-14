import React from 'react'

export const PeopleInfo = ({people}) => {
  return (
    <ul className="list-group card-text">
      <li className="list-group-item"><span className="item-label">Birth Year:</span><br></br> {people.birth_year}</li>
      <li className="list-group-item"><span className="item-label">Eye Color:</span><br></br> {people.eye_color}</li>
      <li className="list-group-item"><span className="item-label">Gender:</span><br></br> {people.gender}</li>
      <li className="list-group-item"><span className="item-label">Hair Color:</span><br></br> {people.hair_color}</li>
      <li className="list-group-item"><span className="item-label">Height:</span><br></br> {people.height}</li>
      <li className="list-group-item"><span className="item-label">Mass:</span><br></br> {people.mass}</li>
      <li className="list-group-item"><span className="item-label">Skin Color:</span><br></br> {people.skin_color}</li>
    </ul>
  )
}
