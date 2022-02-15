import MyContext from './myContext';
import { useState} from 'react';

const MyState = (props) => {
    
    const s1={
        basket:[],
    }
    

    const [state, setState] = useState(s1);

    const addToBasket = (item) => {
        console.log("add to basket mine");
        // console.log("b=",state);
        setState({
            basket: [...state.basket, item]
        })
    }

    const removeFromBasket = (item) => {
        console.log("remove from basket mine");
        const newBasket = state.basket.filter(i => i.id !== item);
        setState({
            basket: newBasket
        })
    }


    return (
        <MyContext.Provider value={{state,addToBasket,removeFromBasket}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;