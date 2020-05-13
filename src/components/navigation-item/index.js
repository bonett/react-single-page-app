import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss';

const NavItemComponent = (props) => {

    const { items } = props;

    return (
        <Nav className="mr-auto navbar__item">
            {
                items.map((item, index) => (
                    <div key={index}>
                        {
                            !item.isDropdown ?
                                <Nav.Link href={item.path} className="navbar__item-link">{item.name}</Nav.Link> : <NavDropdown title={item.name} id="nav-dropdown"><NavDropdown.Item>Action</NavDropdown.Item><NavDropdown.Item>Another action</NavDropdown.Item></NavDropdown>
                        }
                    </div>
                ))
            }
        </Nav>
    );
}


NavItemComponent.propTypes = {
    items: PropTypes.array.isRequired
}

export default NavItemComponent;