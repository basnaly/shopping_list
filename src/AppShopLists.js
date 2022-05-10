import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ContentRouting from "./General Components/ContentRouting";
import NavPanelComponent from "./General Components/NavPanelComponent";


const styles = {
    parent: {
    backgroundImage: 'url("/img/texture-2.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    },
}

const AppShopLists = () => {

    return (
        <div className="d-flex flex-column vh-100"
            style={ styles.paren }>
            <Router>
                <NavPanelComponent />
                <ContentRouting />
            </Router>
        </div>
    )
}

export default AppShopLists;