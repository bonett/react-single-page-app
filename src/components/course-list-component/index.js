import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItemComponent from '../course-item-component';
import FilterComponent from './../filter-component';
import SortItemComponent from '../sort-item-component';

import './style.scss';

const CourseListComponent = (props) => {

    const { courseList } = props;

    const featureList = courseList.featured,
        defaultList = courseList.items;

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
                                        <h6>Page 1 of {courseList.totalItems} results</h6>
                                    </Col>
                                    <Col sm={5}>
                                        <SortItemComponent />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <CourseItemComponent courseList={featureList} />
                                    </Col>
                                    <Col sm={12}>
                                        <CourseItemComponent courseList={defaultList} />
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