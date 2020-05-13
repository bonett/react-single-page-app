import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './style.scss';

function SortItem() {
  return (
    <Form>
      <Row>
        <Col md="12">
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="6">
              Sort by:
            </Form.Label>
            <Col sm="6">
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Control as="select">
                  <option>Relevance</option>
                  <option>2</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default SortItem;