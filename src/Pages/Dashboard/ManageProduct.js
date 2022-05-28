import React, { useEffect, useState } from 'react';
import ManageAproduct from './ManageAproduct';

const ManageProduct = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])

    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = services.filter(service => service._id !== _id);
                        setServices(remaining);
                        alert('Item Deleted');
                    }
                })
        }
    }


    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center mt-3'>Manage Items ({services?.length})</h2>
            <table striped bordered hover variant="dark">
                <thead className='text-center'>
                    <tr>
                        <th>Name</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        services.map(service => <ManageAproduct
                            key={service._id}
                            service={service}
                            handleDelete={handleDelete}
                        ></ManageAproduct>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;