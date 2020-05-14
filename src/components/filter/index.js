import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordeonComponent from '../shared/accordeon';
import IconComponent from '../shared/icon';

import data from './../../static';

import './style.scss';

const FilterComponent = () => {

    const filters = data && data.filters,
        filterByCourse = filters && filters.byCourse,
        filterByDelivery = filters && filters.byDelivery,
        filterBysubject = filters && filters.bySubject;

    return (
        <Row>
            <Col sm={12} className="filter-content">
                <div className="header-filter">
                    <h5><IconComponent iconName={'sort-amount-asc'}/> Filter by course results</h5>
                </div>
                <AccordeonComponent accordeonContent={filterByCourse} />
                <AccordeonComponent accordeonContent={filterByDelivery} />
                <AccordeonComponent accordeonContent={filterBysubject} />
            </Col>
        </Row>
    );
}

FilterComponent.propTypes = {

}

export default FilterComponent;