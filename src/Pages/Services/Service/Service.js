import React from 'react';

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
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Service;