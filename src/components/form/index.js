import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.scss';

function FormContent() {
    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="3">
                    Find CE for a
                </Form.Label>
                <Col sm="4">
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
                            <option>Medial Doctor</option>
                            <option>2</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="12">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
        </Form>
    );
}

export default FormContent;