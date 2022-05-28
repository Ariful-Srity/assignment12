import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, index, handleDeleteButton }) => {

    const { _id, quantity, address, toolName, totalPrice } = order;

    return (
        <tr>
            <th>{index}</th>
            <td>{toolName}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>
                <Link className='btn btn-success btn-outline mr-3' to={`/dashboard/payment/${_id}`} >Pay</Link>
                <button onClick={() => handleDeleteButton(_id)} className='btn btn-error ' >Delete</button>


            </td>
        </tr>
    );
};

export default MyOrder;