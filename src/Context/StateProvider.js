import React, { createContext, useContext, useReducer } from "react";
// import { initialState } from "./reducer";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* useReducer is almost similar to useState (just the opposite syntax, for eg in useState we write const[user,setuser]=useState(initialValue), but in useReducer we write user=useReducer(setUser,initialState)) */}
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
