import React from 'react';
import Image from 'react-bootstrap/Image';

const logo = require('./../../../assets/img/logo.png');

const LogoComponent = () => {
    return <Image src={logo} />
}

export default LogoComponent;