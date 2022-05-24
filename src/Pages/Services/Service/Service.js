import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, Name, Details, img, Price, Availablequantity, Supplier } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:bg-sky-200">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Name}</h2>
                <p>{Details}</p>
                <p>Minimum Orders:{ }</p>
                <p>Available quantity:{Availablequantity}</p>
                <p>price(Per Unit):{Price}</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`}  className="btn btn-primary">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;