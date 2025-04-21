import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const FavoritesDropdown = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemove = (uid, type) => {
        dispatch({
            type: "remove_favorite",
            payload: { uid, type }
        });
    };

    return (
        <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
                {Array.isArray(store.favorites) && store.favorites.length > 0 ? (
                    store.favorites.map((favorite, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center px-3">
                            <Link
                                className="dropdown-item pe-2"
                                to={`/profile/${favorite.type}/${favorite.uid}`}
                                style={{ flexGrow: 1 }}
                            >
                                {favorite.title}
                            </Link>
                            <button
                                className="btn btn-sm btn-outline-danger ms-2"
                                onClick={() => handleRemove(favorite.uid, favorite.type)}
                                title="Remove from favorites"
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item text-muted px-3">No favorites yet</li>
                )}
            </ul>
        </div>
    )
}
