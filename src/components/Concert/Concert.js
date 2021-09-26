import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singer from "../Singer/Singer";
import "./Concert.css";

const Concert = () => {
    // States
    const [singers, setSingers] = useState([]);
    const [cart, setCarts] = useState([]);

    // Data load from json
    useEffect(() => {
        fetch("./singers.JSON")
            .then((res) => res.json())
            .then((data) => setSingers(data));
    }, []);

    // Event handler
    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCarts(newCart);
    };

    return (
        // This site's body area / concert area
        <div className="concert-container">
            <div className="singers-container">
                {/* Using map */}
                {singers.map((singer) => (
                    // Singer Component
                    <Singer
                        key={singer.id}
                        singer={singer}
                        handleAddToCart={handleAddToCart}
                    ></Singer>
                ))}
            </div>

            {/* Cart component */}
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Concert;
