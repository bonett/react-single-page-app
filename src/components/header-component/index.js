import React from 'react';
import PropTypes from 'prop-types';
import FormContent from "../form-component";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './style.scss';

const HeaderContent = (props) => {

    const { state, profession } = props;

    return (
        <header>
            <Container>
                <Row>
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <FormContent state={state} profession={profession} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

HeaderContent.propTypes = {
    state: PropTypes.string.isRequired,
    profession: PropTypes.number.isRequired,
}

export default HeaderContent;