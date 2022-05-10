import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Nav } from 'react-bootstrap';


const styles = {
    nav: {
        fontSize: '18px',
        
        backgroundColor: '#e9ecef',
        opacity: '0.8',
    },
}

const NavPanelComponent = () => {

    let location = useLocation();

    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home" 
                activeKey={ location.pathname }
                style={ styles.nav }>
                <Nav.Item>
                    <Nav.Link as={Link} to="/home" eventKey="/home">
                        Shufersal
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/organi" eventKey="/organi">
                        Organi
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/iherb" eventKey="/iherb">
                        iHerb
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/amazon" eventKey="/amazon">
                        Amazon
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/ikea" eventKey="/ikea">
                        Ikea
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/superfarm" eventKey="/superfarm">
                        Superpharm
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavPanelComponent;