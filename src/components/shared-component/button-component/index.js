import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const ButtonComponent = (props) => {

    const { text, variant } = props;

    return <Button variant={variant}>{text}</Button>
}

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
}

export default ButtonComponent;