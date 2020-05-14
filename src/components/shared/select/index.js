import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const SelectComponent = (props) => {

    const { theme, data, onSelectedValue, selectOption } = props;

    return (
        <Form.Group className={theme}>
            <Form.Control as="select" value={onSelectedValue} onChange={e => selectOption(e.target.value)}>
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
    onSelectedValue: PropTypes.string,
    selectOption: PropTypes.func,
}

export default SelectComponent;