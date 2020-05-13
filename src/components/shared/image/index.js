import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const ImageComponent = (props) => {

    const { image } = props;

    return <Image src={image} fluid/>
}

ImageComponent.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ImageComponent;