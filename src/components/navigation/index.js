import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
/* import Button from 'react-bootstrap/Button'; */
import NavItem from '../navigation-item';
import Container from 'react-bootstrap/Container';
import './style.scss';
import LogoComponent from '../shared/logo';
import ButtonComponent from '../shared/button';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="navbar__content">
            <Container>
                <Navbar.Brand href="/">
                    <LogoComponent />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavItem />
                    <div className="justify-content-end">
                        <ButtonComponent text={'Sign in'} variant={'outline-success'} />
                        <ButtonComponent text={'7 day trial'} variant={'success'} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;