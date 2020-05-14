import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import RadioComponent from '../radio';
import ButtonComponent from '../button';
import './style.scss';
import IconComponent from '../icon';

const AccordeonComponent = (props) => {

    const {
        accordeonContent,
        defaultChecked } = props;

    return (
        <React.Fragment>
            {
                accordeonContent.map((item, index) => {
                    return (
                        <Accordion defaultActiveKey={item.id} key={index}>
                            <Card className="accordeon-content">
                                <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                                    {item.title} <IconComponent iconName={'sort-up'} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={item.id}>
                                    <Card.Body className="accordeon-form">
                                        <RadioComponent radioList={item.inputs} defaultChecked={defaultChecked}/>
                                        <ButtonComponent text={'View more'} variant={'more'} />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    )
                })
            }
        </React.Fragment>
    );
}

AccordeonComponent.propTypes = {
    accordeonContent: PropTypes.any,
    defaultChecked: PropTypes.string,
}

export default AccordeonComponent;