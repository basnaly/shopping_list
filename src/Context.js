import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as ShufersalActions from './Actions/ShufersalAction';
import * as OrganiActions from './Actions/OrganiAction';
import { CATEGORIES_ORGANI, CATEGORIES_SHUFERSAL } from "./Constants/Constants";

export const Context = createContext({
    reducerKey: 'shufersalReducer',
    categories: CATEGORIES_SHUFERSAL,
});

export const ContextCreator = ({ children }) => {

    const [reducerKey, setReducerKey] = useState('shufersalReducer');

    const [actions, setActions] = useState(ShufersalActions);

    const [categories, setCategories] = useState(CATEGORIES_SHUFERSAL)

    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home') {
            setReducerKey('shufersalReducer')
            setActions(ShufersalActions)
            setCategories(CATEGORIES_SHUFERSAL)
        } else if (location.pathname === '/organi') {
            setReducerKey('organiReducer')
            setActions(OrganiActions)
            setCategories(CATEGORIES_ORGANI)
        }

    }, [location.pathname])
    console.log(actions)

    return (
        <Context.Provider value={{ reducerKey, ...actions, categories }} > 
            { children }
        </Context.Provider> 
    )
}