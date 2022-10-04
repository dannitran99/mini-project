import React, { useEffect,useState } from 'react';

function CheckoutSuccess() {
    const [dataCheckout,setDataCheckout] = useState({});
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('checkout-data'));
        if (data) {
            setDataCheckout(data);
        }
    }, []);

    return (
        alert(`name: ${dataCheckout.firstName} ${dataCheckout.lastName}`)
    );
}

export default CheckoutSuccess;