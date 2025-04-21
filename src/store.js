export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    nextPeople: "",
    peopleCount: 0,
    nextPlanets: "",
    planetsCount: 0,
    nextVehicles: "",
    vehiclesCount: 0,
    favorites: [],

  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_people':
      return {
        ...store,
        people: action.payload.results,
        nextPeople: action.payload.next,
        peopleCount: action.payload.count

      };

    case 'load_planets':
      return {
        ...store,
        planets: action.payload.results,
        nextPlanets: action.payload.next,
        planetsCount: action.payload.count
      }

    case 'load_vehicles':
      return {
        ...store,
        vehicles: action.payload.results,
        nextVehicles: action.payload.next,
        vehiclesCount: action.payload.count

      };

    case 'add_favorite':
      if (store.favorites.some(item => item.uid === action.payload.uid && item.type === action.payload.type)) {
        return store;
      }
      return {
        ...store,
        favorites: [...store.favorites, action.payload],
      };

    case "remove_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(
          (item) => !(item.uid === action.payload.uid && item.type === action.payload.type)
        )
      };

    default:
      throw Error('Unknown action.');
  }
}
