export const initialState = {
    basket: [],
  };

//function to update the state
const reducer = (state, action) => {
console.log(action);
switch (action.type) {
    case "ADD_TO_BASKET":
    return {
        ...state,
        basket: [...state.basket, action.item],
    };
    
    case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];

        //Here we cant use the following code-:
        // return{
        //   ...state,
        //   basket: state.basket.filter(item => item.id !== action.id )        
        // }
        //Because it will delete all similar elemnts also

        if (index >= 0) {
        newBasket.splice(index, 1);//Splice removes element from an array

        } else {
        console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
        )
        }

        return {
        ...state,
        basket: newBasket
        }

    default:
        return state;
}
}

export default reducer;