import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.scss';
import TasbContent from '../tabs-item';

function WrapperContent() {
    return (
        <main>
            <Row>
                <Col>
                    <TasbContent />
                </Col>
            </Row>
        </main>
    );
}

export default WrapperContent;