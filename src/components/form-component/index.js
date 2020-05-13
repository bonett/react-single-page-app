import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputComponent from '../shared-component/input-component';
import SelectComponent from '../shared-component/select-component';
import LabelComponent from '../shared-component/label-component';

import data from './../../static';

import './style.scss';

const FormContent = (props) => {

    const { state, profession } = props;

    const label = data && data.findCE,
        states = data && data.states,
        roles = data && data.roles;


    return (
        <Form className="form">
            <Row>
                <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <Form.Group as={Row} controlId="formPlaintextEmail" className="form__choose">
                        <Col sm="12" md="3"  lg="3">
                            <LabelComponent text={label} theme={'dark'} />
                        </Col>
                        <Col sm="12" md="4" lg="4">
                            <SelectComponent theme={'dark'} data={states} onSelectedValue={state}/>
                        </Col>
                        <Col sm="12" md="5" lg="5">
                            <SelectComponent theme={'dark'} data={roles} onSelectedValue={profession}/>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} className="form__search">
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

FormContent.propTypes = {
    state: PropTypes.string.isRequired,
    profession: PropTypes.number.isRequired,
}

export default FormContent;