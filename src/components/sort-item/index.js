import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SelectComponent from '../shared/select';
import LabelComponent from '../shared/label';
import data from './../../static';

import './style.scss';

const SortItemComponent = (props) => {

    const {sortField} = props;

    const label = data && data.sortedBy,
        sort = data && data.sort;

    return (
        <Row className="sort__content">
            <Col lg={6} className="sort__content-text">
                <LabelComponent text={label} theme={'default'} />
            </Col>
            <Col lg={6}>
                <SelectComponent theme={'light'} data={sort} onSelectedValue={sortField} />
            </Col>
        </Row>
    );
}

SortItemComponent.propTypes = {
    sortField: PropTypes.string.isRequired,
}

export default SortItemComponent;