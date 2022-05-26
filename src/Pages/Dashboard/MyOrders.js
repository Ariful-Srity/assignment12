import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrders from '../../Hooks/useOrders';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders] = useOrders();
    const [user] = useAuthState(auth);
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        setUserOrders(orders?.filter(order => order.userEmail === user.email));
    }, [user.email, orders]);

    console.log(userOrders)

    const handleDeleteButton = _id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${_id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const userRemainingItems = userOrders?.filter(order => order._id !== _id);
                        setUserOrders(userRemainingItems);
                        alert('Item Deleted');
                    }
                })
        }
    }



    return (
        <div>
            <h2 className='text-2xl'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tools Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {


                            userOrders.map((order, index) => <MyOrder
                                key={userOrders._id}
                                order={order}
                                index={index}
                                handleDeleteButton={handleDeleteButton}
                            ></MyOrder>)


                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;