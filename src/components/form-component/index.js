import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
                                <Form.Control as="select">
                                    <option>Florida</option>
                                    <option>New York</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col sm="5">
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Control as="select">
                                    <option>Medical Doctor</option>
                                    <option>2</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="12">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-search"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Search courses and providers"
                                    aria-describedby="inputGroupPrepend"
                                    name="username"
                                />
                            </InputGroup>
                        </Form.Label>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default FormContent;