import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
    const { removeItem, increment, decrement } = useContext(CartContext);

    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={img} alt="iamge" />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => decrement(id)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                    <input type="text" placeholder={quantity} disabled />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => increment(id)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>

                <div className="price">
                    <h3>{price}₹</h3>
                </div>

                <div className="remove-item">
                    <i
                        className="fas fa-trash-alt remove"
                        onClick={() => removeItem(id)}></i>
                </div>
            </div>

            <hr />
        </>
    );
};

export default Items;