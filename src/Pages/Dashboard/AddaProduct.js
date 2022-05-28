import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddaProduct = () => {




    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const Name = event.target.name.value;
        const Quantity = parseInt(event.target.quantity.value);
        const Price = event.target.price.value;
        const Details = event.target.details.value;
        const img = event.target.img.value;
        const Supplier = user?.displayName;
        const newItem = { Name, Quantity, Price, Details, img, Supplier };

        fetch('http://localhost:5000/services', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(() => {
                alert("Item added!");
                event.target.reset();
            })
    }

    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-5'>
            <h1>Add New Item</h1>
            <form onSubmit={handleAddItem}>
                <div className="form-control" controlId="formBasicName">
                    <label className='label'>Name</label>
                    <input type="text" name="name" placeholder="Enter Item Name" className="input input-bordered" />
                </div>

                <div className="form-control" controlId="formBasicQuantity">
                    <label className='label'>Quantity</label>
                    <input type="number" name="quantity" placeholder="Enter Quantity" className="input input-bordered" />
                </div>
                <div className="form-control" controlId="formBasicPrice">
                    <label className='label'>Price</label>
                    <input type="number" name="price" placeholder="Enter Price" className="input input-bordered" />
                </div>
                <div className="form-control" controlId="formBasicDetails">
                    <label className='label'>Details</label>
                    <input type="text" name="details" placeholder="Enter Details" className="input input-bordered" />
                </div>
                <div className="form-control" controlId="formBasicUrl">
                    <label className='label'>Image URL</label>
                    <input type="text" name='img' placeholder="Enter Image URL" className="input input-bordered" />
                </div>

                <button variant="primary" type="submit" className='btn btn-outline my-3'>
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddaProduct;