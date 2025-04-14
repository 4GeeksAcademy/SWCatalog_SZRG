import React from 'react'

export const PlanetsInfo = ({planets}) => {
  return (
    <ul className="list-group card-text">
      <li className="list-group-item"><span className="item-label">climate:</span><br></br> {planets.climate}</li>
      <li className="list-group-item"><span className="item-label">diameter:</span><br></br> {planets.diameter}</li>
      <li className="list-group-item"><span className="item-label">gravity:</span><br></br> {planets.gravity}</li>
      <li className="list-group-item"><span className="item-label">orbital_period:</span><br></br> {planets.orbital_period}</li>
      <li className="list-group-item"><span className="item-label">population:</span><br></br> {planets.population}</li>
      <li className="list-group-item"><span className="item-label">rotation_period:</span><br></br> {planets.rotation_period}</li>
      <li className="list-group-item"><span className="item-label">surface_water:</span><br></br> {planets.surface_water}</li>
      <li className="list-group-item"><span className="item-label">terrain:</span><br></br> {planets.terrain}</li>
    </ul>
  )
}