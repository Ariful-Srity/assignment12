import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../../Hooks/useServices';

const Purchase = () => {
    const location = useLocation();
    const id = location?.state?._id;
    const [userSelectedItem, setUserSelectedItem] = useState({});
    const [services] = useServices();
    const [user] = useAuthState(auth);

    useEffect(() => {
        setUserSelectedItem(services?.find(service => service._id === id))
    }, [id, services])
    console.log(userSelectedItem)
    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const totalPrice = quantity * userSelectedItem?.Price;


        if (quantity < userSelectedItem?.MinimumOrders) {
            alert('Minimum Order not filled');
        }
        else if (quantity > userSelectedItem?.Availablequantity) {
            alert('Stock not available');
        }
        else {
            const order = { quantity, address, userName, userEmail, totalPrice, phone };

            fetch('http://localhost:5000/orders', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    event.target.reset();
                    alert('Order Placed');
                })
        }



    }

    return (
        <form onSubmit={handlePurchase}>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">You have selected:<span className='text-warning'>{userSelectedItem?.Name}</span> </h1>

                        <h1 class="text-5xl font-bold">Price of this item is: {userSelectedItem?.Price}</h1>

                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" disabled defaultValue={user.displayName} placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" disabled defaultValue={user.email} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input type="number" name='quantity' placeholder="email" defaultValue={userSelectedItem?.MinimumOrders} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" name='phone' placeholder="Phone" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Address" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Orders</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Purchase;