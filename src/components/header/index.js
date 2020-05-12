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
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <FormContent />
                    </Col>
                </Row>
            </div>
        </header>
    );
}

export default HeaderContent;