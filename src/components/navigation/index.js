import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavItem from '../navigation-item';
import './style.scss';
import Container from 'react-bootstrap/Container';

const logo = require('./../../assets/img/logo.png');

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar__content">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavItem />
                    <div className="justify-content-end">
                        <Button variant="outline-success">Sign in</Button>
                        <Button variant="success">7 day trial</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;