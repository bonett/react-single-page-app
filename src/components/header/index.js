import React from 'react';
import PropTypes from 'prop-types';
import FormContent from "../form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './style.scss';

const HeaderComponent = (props) => {

    const { state, profession, selectState } = props;

    const getSelectOption = (option) => {
        selectState(option);
    }

    return (
        <header>
            <Container>
                <Row>
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <FormContent state={state} profession={profession} selectState={getSelectOption}/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

HeaderComponent.propTypes = {
    state: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    selectState: PropTypes.func,
}

export default HeaderComponent;