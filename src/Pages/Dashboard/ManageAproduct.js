import React from 'react';

const ManageAproduct = ({ service, handleDelete }) => {
    const { Name, _id } = service;
    return (
        <tr>
            <td>{Name}</td>

            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button></td>
        </tr>
    );
};

export default ManageAproduct;