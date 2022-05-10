import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ContextCreator } from "./Context";

import ContentRouting from "./GlobalComponents/ContentRouting";
import NavPanelComponent from "./GlobalComponents/NavPanelComponent";

const AppShopLists = () => {

    return (
        <div className="d-flex flex-column vh-100">
            <Router>
                <ContextCreator>
                    <NavPanelComponent />
                    <ContentRouting />
                </ContextCreator>
            </Router>
        </div>
    )
}

export default AppShopLists;