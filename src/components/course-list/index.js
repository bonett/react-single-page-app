import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItemComponent from '../course-item';
import FilterComponent from '../filter';
import SortItemComponent from '../sort-item';
import SkeletonComponent from './../shared/skeleton'

import './style.scss';

const CourseListComponent = (props) => {

    const { courseList, sortField } = props;

    let featureList, defaultList;

    const getindexPagination = (list) => {
        if (list) {
            return list.totalItems;
        }
    }

    const getDataCourses = (list) => {

        if (list) {
            featureList = list.featured;
            defaultList = list.items;

            return true;
        } else {
            return false;
        }
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
                                    <Col><h6>Page 1 of {getindexPagination(courseList)} results</h6></Col>
                                    <Col>
                                        <SortItemComponent sortField={sortField} />
                                    </Col>
                                </Row>
                                <div>
                                    {
                                        getDataCourses(courseList) ?
                                            <React.Fragment>
                                                <CourseItemComponent courseList={featureList} />
                                                <CourseItemComponent courseList={defaultList} />
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
    courseList: PropTypes.object.isRequired,
    sortField: PropTypes.string.isRequired,
}

export default CourseListComponent;