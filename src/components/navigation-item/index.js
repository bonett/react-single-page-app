import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss';

function NavItem() {
    
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/plans">Plans</Nav.Link>
            <NavDropdown title="Organizations" id="basic-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >Another action</NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/browse-courses">Browse courses</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
        </Nav>
    );
}

export default NavItem;