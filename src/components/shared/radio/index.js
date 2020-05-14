import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const RadioComponent = (props) => {

    const { radioList, defaultChecked } = props;

    return (
        <Form>
            {
                radioList.map((type, index) => (
                    <div key={index} className="mb-3">
                        <Form.Check
                            type={'Radio'}
                            id={type.value}
                            checked={type.value === defaultChecked}
                            label={type.name}
                            value={type.value}
                            onChange={e => console.log(e.target.value)}
                        />
                    </div>
                ))
            }
        </Form>
    );
}

RadioComponent.propTypes = {
    radioList: PropTypes.any,
    defaultChecked: PropTypes.string,
}

export default RadioComponent;