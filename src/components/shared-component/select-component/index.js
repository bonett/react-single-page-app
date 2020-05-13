import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const SelectComponent = (props) => {

    const { theme, data } = props;

    return (
        <Form.Group controlId="exampleForm.ControlSelect2" className={theme}>
            <Form.Control as="select">
                {
                    data.map((item, index) => {
                        return <option key={index} value={item.value}>{item.name}</option>
                    })
                }
            </Form.Control>
        </Form.Group>
    );
}

SelectComponent.propTypes = {
    theme: PropTypes.string.isRequired,
    states: PropTypes.array.isRequired,
}

export default SelectComponent;