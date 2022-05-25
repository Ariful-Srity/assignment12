import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrders from '../../Hooks/useOrders';

const MyOrders = () => {
    const [orders] = useOrders();
    const [user] = useAuthState(auth);
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        setUserOrders(orders?.filter(order => order.userEmail === user.email));
    }, [user.email, orders]);

    console.log(userOrders)
    return (
        <div>
            <h2 className='text-2xl'>My Orders</h2>
            <h2>orders for:{userOrders.address}</h2>
        </div>
    );
};

export default MyOrders;