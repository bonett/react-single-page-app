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

    const { courseList } = props;

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
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={12} md={12} lg={3} className="courses__filter">
                                <FilterComponent />
                            </Col>
                            <Col sm={12} md={12} lg={9} className="courses__content">
                                <Row>
                                    <Col sm={7}>
                                        <h6>Page 1 of {getindexPagination(courseList)} results</h6>
                                    </Col>
                                    <Col sm={5}>
                                        <SortItemComponent />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        {
                                            getDataCourses(courseList) ?
                                                <React.Fragment>
                                                    <CourseItemComponent courseList={featureList} />
                                                    <CourseItemComponent courseList={defaultList} />
                                                </React.Fragment> :
                                                <SkeletonComponent />
                                        }
                                    </Col>
                                </Row>
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
}

export default CourseListComponent;