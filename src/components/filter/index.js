import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './style.scss';

function FilterComponent() {
    return (
        <Row>
            <Col sm={12}>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Course type
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                            <Form.Check
                                                type={type}
                                                label={`default-${type}`}
                                                id={`default-${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Delivery type
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                            <Form.Check
                                                type={type}
                                                label={`default-${type}`}
                                                id={`default-${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Subject area
                    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                            <Form.Check
                                                type={type}
                                                label={`default-${type}`}
                                                id={`default-${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </Row>
    );
}

export default FilterComponent;