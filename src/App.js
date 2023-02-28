import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from './components/card/Card';
import Cart from './components/cartPage/Cart';
import ContactUs from './components/contactpage/ContactUs';
import Gamedetails from './components/detailspage/Gamedetails';
import Payment from './components/paymentpage/Payment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details" element={<Gamedetails />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




