/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const CounterContext = createContext(null);

export const CounterProvider = function (props) {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {props.children}
            {/* <App /> */}
        </CounterContext.Provider>
    )
}