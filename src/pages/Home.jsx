import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { HorizontalScroll } from "../components/HorizontalScroll.jsx";
import { BaseCard } from "../components/BaseCard.jsx";
import { PeopleInfo } from "../components/PeopleInfo.jsx";
import { PlanetsInfo } from "../components/PlanetsInfo.jsx";
import { VehiclesInfo } from "../components/VehiclesInfo.jsx";

export const Home = () => {
	const [loadingPeople, setLoadingPeople] = useState(false)
	const [loadingPlanets, setLoadingPlanets] = useState(false)
	const [loadingVehicles, setLoadingVehicles] = useState(false)

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		loadPeople()
		loadPlanets()
		loadVehicles()
	}, [])

	const loadPeople = async () => {
		if (store.people.length > 0) return;
		setLoadingPeople(true);
		let response = await fetch("https://www.swapi.tech/api/people/")
		if (!response.ok) {
			console.error(response.status, response.statusText)
			return
		}
		let data = await response.json()

		const urls = data.results.map(item => item.url);

		const detailPromises = urls.map(url =>
			fetch(url).then(res => res.json())
		);

		const details = await Promise.all(detailPromises);
		const fullPeople = details
			.filter(item => item.result?.properties)
			.map(item => item.result.properties);

		dispatch({
			type: "load_people",
			payload: {
				results: fullPeople,
				next: data.next,
				count: data.total_records || fullPeople.length
			}
		})
		setLoadingPeople(false);
	}


	const loadPlanets = async () => {
		if (store.planets.length > 0) return;
		setLoadingPlanets(true);
		let response = await fetch("https://www.swapi.tech/api/planets/")
		if (!response.ok) {
			console.error(response.status, response.statusText)
			return
		}
		let data = await response.json()

		const urls = data.results.map(item => item.url);

		const detailPromises = urls.map(url =>
			fetch(url).then(res => res.json())
		);

		const details = await Promise.all(detailPromises);
		const fullPlanets = details
			.filter(item => item.result?.properties)
			.map(item => item.result.properties);

		dispatch({
			type: "load_planets",
			payload: {
				results: fullPlanets,
				next: data.next,
				count: data.total_records || fullPlanets.length
			}
		})
		setLoadingPlanets(false);
	}

	const loadVehicles = async () => {
		if (store.planets.length > 0) return;
		setLoadingVehicles(true);
		let response = await fetch("https://www.swapi.tech/api/vehicles/")
		if (!response.ok) {
			console.error(response.status, response.statusText)
			return
		}
		let data = await response.json()

		const urls = data.results.map(item => item.url);

		const detailPromises = urls.map(url =>
			fetch(url).then(res => res.json())
		);

		const details = await Promise.all(detailPromises);
		const fullVehicles = details
			.filter(item => item.result?.properties)
			.map(item => item.result.properties);

		dispatch({
			type: "load_vehicles",
			payload: {
				results: fullVehicles,
				next: data.next,
				count: data.total_records || fullVehicles.length
			}
		})
		setLoadingVehicles(false);
	}


	return (
		<div className="container-fluid mt-5">
			<div className="row mt-5">
				<div className="col-12 text-center mb-5 section-title" id="sw-people">
					<h2>Star Wars People</h2>
				</div>
				<div className="col-12">
					{
						loadingPeople ?
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div> :
							<HorizontalScroll>
								{Array.isArray(store.people) && store.people.map((person, index) =>
									<BaseCard key={index} title={person.name} url={person.url}  id={person}
									type="people">
										<PeopleInfo people={person} />
									</BaseCard>)}
							</HorizontalScroll>
					}
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-12 text-center mb-5 section-title" id="sw-planets">
					<h2>Star Wars Planets</h2></div>
				<div className="col-12 ">
					{
						loadingPlanets ?
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div> :
							<HorizontalScroll>
								{Array.isArray(store.planets) && store.planets.map((planet, index) =>
									<BaseCard key={index} title={planet.name} url={planet.url}   id={planet.id}
									type="planets">
										<PlanetsInfo planets={planet} />
									</BaseCard>)}
							</HorizontalScroll>
					}
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-12 text-center mb-5 section-title" id="sw-vehicles">
					<h2>Star Wars vehicles</h2></div>
				<div className="col-12 mt-3">
					{
						loadingVehicles ?
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div> :
							<HorizontalScroll>
								{Array.isArray(store.vehicles) && store.vehicles.map((vehicle, index) =>
									<BaseCard key={index} title={vehicle.name} url={vehicle.url}  id={vehicle.id}
									type="vehicles">
										<VehiclesInfo vehicles={vehicle} />
									</BaseCard>)}
							</HorizontalScroll>
					}
				</div>
			</div>
		</div>
	);
}; 