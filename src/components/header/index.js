import React from 'react';
import FormContent from "../form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.scss';

function HeaderContent() {
    return (
        <header>
            <div className="container">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <FormContent />
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default HeaderContent;