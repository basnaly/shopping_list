import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Context = createContext({
    reducerKey: 'shufersalReducer',
});

export const ContextCreator = ({ children }) => {

    const [reducerKey, setReducerKey] = useState('shufersalReducer');

    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            setReducerKey('shufersalReducer')
        } else if (location.pathname === '/organi') {
            setReducerKey('organiReducer')
        }

    }, [location.pathname])

    return (
        <Context.Provider value={{ reducerKey }} > 
            { children }
        </Context.Provider> 
    )
}