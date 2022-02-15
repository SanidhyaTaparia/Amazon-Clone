import React from 'react'
import { useContext } from 'react'

import './Product.css'
// import {useStateValue} from "../../Context/StateProvider"

import myContext from '../../Context/myContext'

const Product = ({id,title,image,price,rating}) => {
    // var r=Number({rating})
    // console.log("r=",r);
    // const [{ basket }, dispatch] = useStateValue();

    const context=useContext(myContext);

    const i={
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
    }

    const add=()=>{
        context.addToBasket(i);
    }

    // console.log("this is the basket>>>",basket);
    // const addToBasket = () => {
    //     // dispatch the item into the data layer
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //         id: id,
    //         title: title,
    //         image: image,
    //         price: price,
    //         rating: rating,
    //         },
    //     });
    // };
    let a=Array(rating)
    return (
        <div className="product">   
           <div className="product__info">
               <p className="product__name">{title}</p>
               <p className="product__price">
                   <small>₹</small>
                   <strong>{price}</strong>
               </p>

               <div className="product__rating">
                    {a.fill().map(() => (
                        <p>🌟</p>
                    ))}
                    {/* // In this approach, we are creating an array with ten empty slots, 
                    // then filling those slots with the null value, 
                    // then creating a new array with unique objects. */}
               </div>

           </div>

            
            <img src={image} alt={title} />
            
            <button onClick={add} className="buttonAdd">Add to Basket</button>
        </div>
    )
}

export default Product
