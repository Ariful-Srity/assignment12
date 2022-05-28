import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckOutForm = ({ selectedOrder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { _id, totalPrice: price, userEmail, userName } = selectedOrder || {};
    const totalPrice = parseInt(price);


    useEffect(() => {
        totalPrice && fetch('https://dry-ravine-38749.herokuapp.com/create-payment-intents', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setSuccess('');
        }
        else {
            setCardError('');

            setSuccess('Payment successful!');
            setTransactionId(paymentIntent.id);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-outline btn-success' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {cardError && <p className="text-xl">{cardError}</p>}
            {success &&
                <p className="text-success ">{success} <br />
                    Your transaction Id is:  <span className='text-warning text-xl'>  {transactionId}</span>
                </p>}
        </form>
    );
};

export default CheckOutForm;

