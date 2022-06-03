import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const SwitchContext = createContext();

const initialState = {
    position: "01",
    isDisable: true,
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.tooglePosition = (flag) => {
        dispatch({ type: "TOGGLE_POSITION", payload: flag });
    };

    return (
        <SwitchContext.Provider value={value}>
            {children}
        </SwitchContext.Provider>
    );
};
