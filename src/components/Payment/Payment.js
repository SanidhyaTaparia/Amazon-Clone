import React from 'react'
import { useContext } from 'react'
import './Payment.css'
import myContext from '../../Context/myContext'
import userContext from '../../Context/userContext'
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from '../../Pages/CheckoutProduct/CheckoutProduct'

const Payment = () => {
    const context=useContext(myContext);
    const context2=useContext(userContext);
    const basket=context.state.basket;
    const user=context2.state.user;
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
