import React from "react";
import "./Cart.css";

const Cart = (props) => {
    // Destructure for cart
    const { cart } = props;
    // Dynamically total & name
    let total = 0;
    let name = "";
    for (const singer of cart) {
        total = total + singer.salary;
        name = name + " " + singer.name;
    }

    return (
        // Cart Container
        <div className="cart-container">
            <h2 className="top-area">Top Singers</h2>
            <h3 className="select-area">
                Selected Singers: {props.cart.length}
            </h3>
            <p className="charged-area">Total Charged: ৳{total}</p>
            <h4 className="select-name">{name}</h4>
        </div>
    );
};

export default Cart;
