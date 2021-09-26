import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Singer.css";

const Singer = (props) => {
    // Destructure for singer
    const { name, role, age, country, salary, img } = props.singer;
    // Fontawesome icon
    const icon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        // Singer Area
        <div className="singer-div">
            <img src={img} alt="" />
            <h1 className="singer-name">{name}</h1>
            <h3>Passion: {role}</h3>
            <h4>Age: {age}</h4>
            <p>Charge: ৳{salary}</p>
            <p>
                <small>From: {country}</small>
            </p>
            {/* Button & Event handler */}
            <button
                onClick={() => props.handleAddToCart(props.singer)}
                className="regular-btn"
            >
                {icon} Add to cart
            </button>
        </div>
    );
};

export default Singer;
