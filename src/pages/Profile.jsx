import React from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { PeopleInfo } from "../components/PeopleInfo";
import { PlanetsInfo } from "../components/PlanetsInfo";
import { VehiclesInfo } from "../components/VehiclesInfo";

export const Profile = () => {
	const { uid, type } = useParams();
	const { store } = useGlobalReducer();

	const collections = {
		people: store.people,
		planets: store.planets,
		vehicles: store.vehicles,
	};

	const selectedCollection = collections[type] || [];
	const foundItem = selectedCollection.find(item => item.uid === uid);

	if (!foundItem) {
		return (
			<div className="container mt-5">
				<h2>Item not found</h2>
				<p>Not found any {type} with UID <strong>{uid}</strong>.</p>
			</div>
		);
	}

    const componentType = () => {
        switch (type) {
            case 'people':      
              return <PeopleInfo people={foundItem}/>;

            case 'planets':      
              return <PlanetsInfo planets={foundItem}/>;

            case 'vehicles':      
              return <VehiclesInfo vehicles={foundItem}/>;

            default:
                throw Error('Unknown action.');
        }


    }

    
  return (
    <div className="container text-center">
        <div className="col-12"><h1>{foundItem.name}</h1></div>
        <div className="row mb-4">
            <div className="col-2"><img src="https://picsum.photos/200"></img></div>
            <div className="col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat porttitor est sit amet rutrum. Vivamus ligula augue, pulvinar elementum nibh id, scelerisque porta tortor.</div>
        </div>
        <div className="row">
            {componentType()}
        </div>

        <Link to="/" className="btn btn-danger mt-2 read-more-button">Back to home</Link>
    </div>
  )
}
