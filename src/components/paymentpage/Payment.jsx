import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import NavBar from '../navbar/Navbar';


const Payment = (total) => {
    // console.log(total.total);
    
    const onToken =(token)=>{
        console.log(token)
    }
    return (
        <div>
            <NavBar/>
            <h1>Make Your Payment</h1>
            <StripeCheckout
                token={onToken}
                name="Indranil's Game Store"
                currency='inr'
                amount={4000*100}
                stripeKey="pk_test_51MhE3ISEjDycde8d4OlPlfaL8dqIgGecZArpAH8jCoDs6aC4BNrn3JSIDvKvw0vnkw3OyYoeSIW102wsjrqaAvxP00gTr85HFI"
            />
        </div>
    )
}

export default Payment;

