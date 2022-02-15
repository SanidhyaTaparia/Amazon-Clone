import React from 'react'
import { useContext } from 'react'
import "./Checkout.css"
import Subtotal from "../../Pages/Subtotal/Subtotal"
// import { useStateValue } from '../../Context/StateProvider'
import CheckoutProduct from '../../Pages/CheckoutProduct/CheckoutProduct'
// import FlipMove from 'react-flip-move';

import myContext from '../../Context/myContext'

const Checkout = () => {
    // const [{ basket, user }, dispatch] = useStateValue();

    const context = useContext(myContext);
    const basket=context.state.basket;

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="Checkout Ad"
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            key={item.id}
                            />
                        ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
