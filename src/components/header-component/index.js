import React from 'react';
import FormContent from "../form-component";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './style.scss';

const HeaderContent = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <FormContent />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default HeaderContent;