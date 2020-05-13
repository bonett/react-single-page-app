import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.scss';

const SpinnerComponent = () => {

    return (
        <Row className="spinner">
            <Col className="spinner__content">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Col>
        </Row>
    );
}

export default SpinnerComponent;