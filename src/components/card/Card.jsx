import NavBar from "../navbar/Navbar";
import React, { useContext } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import "../card/Card.css"

const Card = () => {
    const { gameData, loading, addToCart, showDetails } = useContext(context);
    // console.log(gameData);

    if (loading) {
        return (<h1>LOADING..WAIT</h1>)
    }

    return (
        <>
            <NavBar />
            {gameData?.map((game) =>
                <div id="card">
                    <h1 id="fp_title">{game.title}</h1>
                    <Link to="/details">
                        <img id="fp_img" src={game.image} alt={game.title} onClick={() => { showDetails(game.title, game.image, game.description, game.price) }} />
                    </Link>
                    <p id="fp_description">{game.description}</p>
                    <h2 id="fp_price">{game.price}</h2>
                    <button id="fp_button" onClick={() => { addToCart(game.title, game.price) }} >Add to card</button>
                </div>
            )}
        </>
    )
}
export default Card;