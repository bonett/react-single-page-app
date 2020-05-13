import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.scss';

const PaginationComponent = (props) => {

    const { pageIndex, previousPageItems, nextPageItems } = props;

    const getNextPage = (size) => {
        nextPageItems(size);
    }

    const getPreviousPage = (size) => {
        previousPageItems(size);
    }

    return (
        <Row>
            <Col className="pagination-content">
                <Pagination>
                    <Pagination.Prev onClick={() => getPreviousPage(1)} disabled={pageIndex === 1} />
                    <Pagination.Item active>{pageIndex}</Pagination.Item>
                    <Pagination.Next onClick={() => getNextPage(1)} />
                </Pagination></Col>
        </Row>
    );
}

PaginationComponent.propTypes = {
    pageIndex: PropTypes.number,
    previousPageItems: PropTypes.func,
    nextPageItems: PropTypes.func,
}

export default PaginationComponent;