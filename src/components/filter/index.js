import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordeonComponent from '../shared/accordeon';
import IconComponent from '../shared/icon';

import data from './../../static';

import './style.scss';

const FilterComponent = (props) => {

    const {
        deliveryType,
        courseType,
        subjectArea } = props;

    const filters = data && data.filters,
        filterByCourse = filters && filters.byCourse,
        filterByDelivery = filters && filters.byDelivery,
        filterBysubject = filters && filters.bySubject;

    return (
        <Row>
            <Col sm={12} className="filter-content">
                <div className="header-filter">
                    <h5><IconComponent iconName={'sort-amount-asc'} /> Filter by course results</h5>
                </div>
                <AccordeonComponent accordeonContent={filterByCourse} defaultChecked={courseType} />
                <AccordeonComponent accordeonContent={filterByDelivery} defaultChecked={deliveryType} />
                <AccordeonComponent accordeonContent={filterBysubject} defaultChecked={subjectArea} />
            </Col>
        </Row>
    );
}

FilterComponent.propTypes = {
    deliveryType: PropTypes.string,
    courseType: PropTypes.string,
    subjectArea: PropTypes.string,
}

export default FilterComponent;