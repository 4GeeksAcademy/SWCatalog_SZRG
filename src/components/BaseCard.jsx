import React from 'react'
import { Link } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const BaseCard = ({ title, url, img, children, id, type}) => {
    const { store, dispatch } = useGlobalReducer()


    return (
        <div className="card text-center" >
            <div className="card-body">
                <h5 className="card-title ">{title}</h5>
                {children}
                <div className="card-buttons">
                    <Link to={url} className="btn btn-danger mt-2 read-more-button">Read more</Link>
                    <button className="btn btn-danger mt-2 favorite-button"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}
