import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss';

function NavItem() {

    return (
        <Nav className="mr-auto navbar__item">
            <Nav.Link href="/features" className="navbar__item-link">Features</Nav.Link>
            <Nav.Link href="/plans" className="navbar__item-link">Plans</Nav.Link>
            <NavDropdown title="Organizations" id="nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/browse-courses" className="navbar__item-link">Browse courses</Nav.Link>
            <Nav.Link href="/support" className="navbar__item-link">Support</Nav.Link>
        </Nav>
    );
}

export default NavItem;