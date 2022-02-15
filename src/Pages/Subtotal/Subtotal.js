import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router";

import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import {useStateValue} from "../../Context/StateProvider"

import myContext from "../../Context/myContext";

function Subtotal() {
  // const [{basket},dispatch]=useStateValue();

  const context=useContext(myContext);
  const history=useHistory();

  const basket=context.state.basket;

  // console.log("this is BASKET.....=",basket);
  let sum=0;
  for(let i=0;i<basket.length;i++){
    console.log("price=",basket[i].price);
    sum+=basket[i].price;
  }
  console.log("Sum=",sum);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={sum} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
