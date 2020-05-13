import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const SelectComponent = (props) => {

    const { theme, data, onSelectedValue } = props;

    return (
        <Form.Group controlId="exampleForm.ControlSelect2" className={theme}>
            <Form.Control as="select" defaultValue={onSelectedValue}>
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
    data: PropTypes.array.isRequired,
    onSelectedValue: PropTypes.string.isRequired,
}

export default SelectComponent;