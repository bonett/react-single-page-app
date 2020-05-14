import React from 'react';
import PropTypes from 'prop-types';
import FormContent from "../form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './style.scss';

const HeaderComponent = (props) => {

    const { state, profession, selectStateOption, selectMedicalOption } = props;

    const getSelectStateOption = (option) => {
        selectStateOption(option);
    }

    const getSelectMedicalOption = (option) => {
        selectMedicalOption(option);
    }

    return (
        <header className="header">
            <Container>
                <Row>
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }} className="header-content">
                        <FormContent state={state} profession={profession} selectStateOption={getSelectStateOption} selectMedicalOption={getSelectMedicalOption} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

HeaderComponent.propTypes = {
    state: PropTypes.string,
    profession: PropTypes.string,
    selectStateOption: PropTypes.func,
    selectMedicalOption: PropTypes.func,
}

export default HeaderComponent;