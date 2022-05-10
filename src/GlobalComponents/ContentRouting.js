import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";

import ShopComponent from '../Components/ShopComponent';

const ContentRouting = () => {

    return (
        <Routes>
            <Route path='/home' element={ <ShopComponent /> } />
            <Route path='/organi' element={ <ShopComponent /> } />
            <Route path='/iherb' element={ <ShopComponent />} />    
            <Route path='/amazon' element={ <ShopComponent /> } />
            <Route path='/ikea' element={ <ShopComponent /> } />
            <Route path='/superfarm' element={ <ShopComponent /> } />
            <Route exact path="*" 
                element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default ContentRouting;