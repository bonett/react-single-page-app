import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItemComponent from '../course-item';
import FilterComponent from '../filter';
import SortItemComponent from '../sort-item';
import SkeletonComponent from './../shared/skeleton';
import PaginationComponent from './../shared/pagination';

import './style.scss';

const CourseListComponent = (props) => {

    const { courseList, featureList, sortField, selectSortOption, pageIndex, nextPageItems, previousPageItems, totalPages } = props;

    const getSelectSortOption = (option) => {
        selectSortOption(option)
    }

    const getNextPage = (size) => {
        nextPageItems(size);
    }

    const getPreviousPage = (size) => {
        previousPageItems(size);
    }

    return (
        <div className="courses">
            <Container>
                <Row>
                    <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={3} className="courses__filter">
                                <FilterComponent />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9} className="courses__content">
                                <Row className="courses__content-sort">
                                    <Col><h6>Page {pageIndex} of {totalPages} results</h6></Col>
                                    <Col>
                                        <SortItemComponent sortField={sortField} selectSortOption={getSelectSortOption} />
                                    </Col>
                                </Row>
                                <div>
                                    {
                                        courseList && featureList ?
                                            <React.Fragment>
                                                <CourseItemComponent courseList={featureList} />
                                                <CourseItemComponent courseList={courseList.items} />
                                                <PaginationComponent pageIndex={pageIndex} previousPageItems={getPreviousPage} totalPages={totalPages} nextPageItems={getNextPage} />
                                            </React.Fragment> :
                                            <SkeletonComponent />
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

CourseListComponent.propTypes = {
    courseList: PropTypes.any,
    featureList: PropTypes.any,
    sortField: PropTypes.string,
    selectSortOption: PropTypes.func,
    pageIndex: PropTypes.number,
    previousPageItems: PropTypes.func,
    nextPageItems: PropTypes.func,
    totalPages:PropTypes.number,
}

export default CourseListComponent;