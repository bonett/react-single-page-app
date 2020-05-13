import React from 'react';
import PropTypes from 'prop-types';

const IconComponent = (props) => {

    const { iconName } = props;

    return (
        <i className={`fa fa-${iconName}`}></i>
    );
}

IconComponent.propTypes = {
    iconName: PropTypes.string.isRequired,
}

export default IconComponent;