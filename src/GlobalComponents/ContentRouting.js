import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";

import ShufersalComponent from '../Components/ShufersalComponent';
import OrganiComponent from '../Components/OrganiComponent';
import IherbComponent from '../Components/IherbComponent';
import AmazonComponent from '../Amazon Components/AmazonComponent';
import IkeaComponent from '../Components/IkeaComponent';
import SuperpharmComponent from '../Components/SuperpharmComponent';

const ContentRouting = () => {

    return (
        <Routes>
            <Route path='/home' element={ <ShufersalComponent /> } />
            <Route path='/organi' element={ <OrganiComponent /> } />
            <Route path='/iherb' element={ <IherbComponent />} />    
            <Route path='/amazon' element={ <AmazonComponent /> } />
            <Route path='/ikea' element={ <IkeaComponent /> } />
            <Route path='/superfarm' element={ <SuperpharmComponent /> } />
            <Route exact path="*" 
                element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default ContentRouting;