import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const LabelComponent = (props) => {

    const { text } = props;

    return (
        <Form.Label>
            {text}
        </Form.Label>
    );
}

LabelComponent.propTypes = {
    text: PropTypes.string.isRequired,
}

export default LabelComponent;