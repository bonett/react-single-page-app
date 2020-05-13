import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputComponent from '../shared-component/input-component';
import SelectComponent from '../shared-component/select-component';

import './style.scss';

const FormContent = () => {
    return (
        <Form>
            <Row>
                <Col md={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 2 }}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Find CE for a
                        </Form.Label>
                        <Col sm="3">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <SelectComponent />
                            </Form.Group>
                        </Col>
                        <Col sm="5">
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <SelectComponent />
                            </Form.Group>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="12">
                            <InputComponent />
                        </Form.Label>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default FormContent;