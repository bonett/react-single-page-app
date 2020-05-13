import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './style.scss';

const InputComponent = () => {
    return (
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
    );
}

export default InputComponent;