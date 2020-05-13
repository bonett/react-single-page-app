import React from 'react';
import Form from 'react-bootstrap/Form';

import './style.scss';

const SelectComponent = () => {
    return (
        <Form.Control as="select">
            <option>Florida</option>
            <option>New York</option>
        </Form.Control>
    );
}

export default SelectComponent;