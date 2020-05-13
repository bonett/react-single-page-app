import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './style.scss';

const RadioComponent = (props) => {

    const { radioList } = props;

    console.log(radioList)

    return (
        <Form>
            {
                radioList.map((type, index) => (
                    <div key={index} className="mb-3">
                        <Form.Check
                            type={'Radio'}
                            id={type.value}
                            label={type.name}
                        />
                    </div>
                ))
            }
        </Form>
    );
}

RadioComponent.propTypes = {
    radioList: PropTypes.any,
}

export default RadioComponent;