import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const LabelComponent = (props) => {

    const { text, theme } = props;

    return (
        <Form.Label className={theme}>
            {text}
        </Form.Label>
    );
}

LabelComponent.propTypes = {
    text: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
}

export default LabelComponent;