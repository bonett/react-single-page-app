import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SelectComponent from '../shared/select';
import LabelComponent from '../shared/label';
import data from './../../static';

import './style.scss';

const SortItemComponent = () => {

    const label = data && data.sortedBy,
        sort = data && data.sort;

    return (
        <Row>
            <Col sm={6}>
                <LabelComponent text={label} theme={'default'} />
            </Col>
            <Col sm={6}>
                <SelectComponent theme={'light'} data={sort} onSelectedValue={'RELEVANCE'} />
            </Col>
        </Row>
    );
}

SortItemComponent.propTypes = {
    
}

export default SortItemComponent;