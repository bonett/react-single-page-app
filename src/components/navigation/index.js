import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ImageComponent from '../shared/image';
import NavItemComponent from '../navigation-item';
import ButtonComponent from '../shared/button';

import './style.scss';

const NavigationComponent = (props) => {

    const { items } = props;
    const logo = require('./../../assets/img/logo.png');

    return (
        <Navbar expand="lg" className="navbar__content">
            <Container>

                <Navbar.Brand href="/">
                    <ImageComponent image={logo} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <NavItemComponent items={items} />

                    <div className="justify-content-end">
                        <ButtonComponent text={'Sign in'} variant={'outline-success'} />
                        <ButtonComponent text={'7 day trial'} variant={'success'} />
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

NavigationComponent.propTypes = {
    items: PropTypes.array.isRequired
}


export default NavigationComponent;