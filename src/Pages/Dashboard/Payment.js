import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useOrders from '../../Hooks/useOrders';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4J91FKyPyBHDNUKxNb9w9CfA7REqi2Ed76KMECWVOMOQ026FC5wBJNYLDxrIbtynTesePlUxd9UpBcb0XxHTAd00S31igBGD');

const Payment = () => {
    const { id } = useParams();
    const [orders] = useOrders();
    const [selectedOrder, setSelectedOrder] = useState({});

    useEffect(() => {
        setSelectedOrder(orders?.find(order => order._id === id));
    }, [id, orders]);

    const { toolName, totalPrice } = selectedOrder || {};


    return (
        <div className=''>
            <h3>Pay for {toolName}</h3>
            <p className="text-xl">Payable amount: ${totalPrice}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedOrder={selectedOrder} />
            </Elements>
        </div>
    );
};

export default Payment;
