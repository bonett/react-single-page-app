import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './style.scss';

const RadioComponent = (props) => {

    const { radioList } = props;

    const [inputChecked, setInputChecked] = useState();

    const getInputRadio = (event) => {
        setInputChecked(event.target.value)
    }

    return (
        <Form>
            {
                radioList.map((type, index) => (
                    <div key={index} className="mb-3">
                        <Form.Check
                            type={'Radio'}
                            id={type.value}
                            checked={type.value === inputChecked}
                            label={type.name}
                            value={type.value}
                            onChange={e => getInputRadio(e)}
                        />
                    </div>
                ))
            }
        </Form>
    );
}

RadioComponent.propTypes = {
    radioList: PropTypes.any
}

export default RadioComponent;