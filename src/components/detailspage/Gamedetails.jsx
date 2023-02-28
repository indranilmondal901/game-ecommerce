import React, { useContext } from 'react'
import { context } from '../../context/context'
import NavBar from '../navbar/Navbar';
import "../detailspage/Gamedetails.css"

const Gamedetails = () => {
  const { details, addToCart } = useContext(context);
  // console.log(details);

  // useEffect(() => {
  //   console.log(details);
  // },[details])

  return (
    <>
      <NavBar />
      <div>
        <h1 id="dp_title">{details[0]}</h1>
        <img id="dp_img" src={details[1]} alt={details[0]} />
        <p id='dp_details'>{details[2]}</p>
      </div >
      <div id='dp_price_btn'>
        <h3 id='dp_price'>{details[3]}</h3>
        <button id="dp_btn" onClick={() => { addToCart(details[0], details[3]) }} >Add To Cart</button>
      </div>
    </>
  )
}

export default Gamedetails
