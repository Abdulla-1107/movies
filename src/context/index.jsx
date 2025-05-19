import { useContext, createContext, useReducer } from "react";

const Context = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => {
  const array = useReducer(reducer, initialState);
  return <Context.Provider value={array}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
