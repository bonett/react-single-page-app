import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SmallComponent = (props) => {

    const { text } = props;

    return (
        <small>{text}</small>
    );
}

SmallComponent.propTypes = {
    text: PropTypes.string.isRequired
}

export default SmallComponent;