export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    nextPeople: "",
    peopleCount: 0,
    nextPlanets: "",
    planetsCount: 0,
    nextVehicles:"",
    vehiclesCount: 0,
    favorites:[],

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_people':
      console.log("People loaded...")

      return {
        ...store,
        people: action.payload.results,
        nextPeople: action.payload.next,
        peopleCount: action.payload.count

      };

    case 'load_planets':
      console.log("Planets loaded...")
      return { 
        ...store,
        planets: action.payload.results,
        nextPlanets: action.payload.next,
        planetsCount: action.payload.count
      }

    case 'load_vehicles':
      console.log("Vehicles loaded...")
      return { 
        ...store,
        vehicles: action.payload.results,
        nextVehicles: action.payload.next,
        vehiclesCount: action.payload.count
      
      };

    case 'add_favorite':

      return {
        ...store
      };

    case 'delete_favorite':
      return {

      };

    default:
      throw Error('Unknown action.');
  }
}
