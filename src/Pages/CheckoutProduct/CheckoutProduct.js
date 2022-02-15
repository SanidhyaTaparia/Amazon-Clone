import React from 'react';
import { useContext } from 'react';

import './CheckoutProduct.css'
// import { useStateValue } from "../../Context/StateProvider";

import myContext from '../../Context/myContext';

function CheckoutProduct({ id, image, title, price, rating }) {
    // const [{ basket }, dispatch] = useStateValue();

    const context=useContext(myContext);

    const remove=()=>{
        context.removeFromBasket(id);
    }

    // const removeFromBasket = () => {
    //     // remove the item from the basket
    //     console.log("Button Running");
    //     dispatch({
    //         type: 'REMOVE_FROM_BASKET',
    //         id: id,
    //     })
    // }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="checkoutimage" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {/* {!hideButton && ( */}
                    <button onClick={remove}>Remove from Basket</button>
                {/* )} */}
            </div>
        </div>
    )
}

export default CheckoutProduct
