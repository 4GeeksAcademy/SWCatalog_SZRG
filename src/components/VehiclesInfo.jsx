import React from 'react'

export const VehiclesInfo = ({vehicles}) => {
  return (
    <ul className="list-group card-text">
      <li className="list-group-item"><span className="item-label">Cargo Capacity:</span><br></br> {vehicles.cargo_capacity}</li>
      <li className="list-group-item"><span className="item-label">Consumables:</span><br></br> {vehicles.consumables}</li>
      <li className="list-group-item"><span className="item-label">Cost in credits:</span><br></br> {vehicles.cost_in_credits}</li>
      <li className="list-group-item"><span className="item-label">Crew:</span><br></br> {vehicles.crew}</li>
      <li className="list-group-item"><span className="item-label">Length:</span><br></br> {vehicles.length}</li>
      <li className="list-group-item"><span className="item-label">Manufacturer:</span><br></br> {vehicles.manufacturer}</li>
      <li className="list-group-item"><span className="item-label">Max Atmoshering Speed:</span><br></br> {vehicles.max_atmosphering_speed}</li>
      <li className="list-group-item"><span className="item-label">Model:</span><br></br> {vehicles.model}</li>
      <li className="list-group-item"><span className="item-label">Passengers:</span><br></br> {vehicles.passengers}</li>
      <li className="list-group-item"><span className="item-label">Vehicle Class:</span><br></br> {vehicles.vehicle_class}</li>
    </ul>
  )
}