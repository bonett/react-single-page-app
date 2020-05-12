import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavItem from '../navigation-item';
import './style.scss';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">cebroker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavItem />
                    <div className="justify-content-end">
                        <Button variant="outline-success">Sign In</Button>
                        <Button variant="success">7 day trial</Button>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navigation;