import React from 'react'
import { Link } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const BaseCard = ({ title, url, img, children, uid, type }) => {

    const {store, dispatch } = useGlobalReducer()

    	const isFavorite = store.favorites.some(
		(item) => item.uid === uid && item.type === type
	);

	const handleFavoriteToggle = () => {
		if (isFavorite) {
			dispatch({
				type: "remove_favorite",
				payload: { uid, type }
			});
		} else {
			dispatch({
				type: "add_favorite",
				payload: { uid, type, title, url }
			});
		}
	};

    return (
        <div className="card text-center" >
            <div className="card-body">
                <img src={img}></img>
                <h5 className="card-title ">{title}</h5>
                {children}
                <div className="card-buttons">
                    <Link to={"/profile/" + type + "/" + uid} className="btn btn-danger mt-2 read-more-button">Read more</Link>
                    <button onClick={handleFavoriteToggle} className="btn btn-danger mt-2 favorite-button"><i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                </div>
            </div>
        </div>
    )
}
