import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItemComponent from '../course-item-component';
import FilterContent from '../filter';
import './style.scss';
import SortItem from '../sort-item';

const CourseListComponent = (props) => {

    const { courseList } = props;

    return (
        <div className="courses">
            <Container>
                <Row>
                    <Col md={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={12} md={12} lg={3} className="courses__filter">
                                <FilterContent />
                            </Col>
                            <Col sm={12} md={12} lg={9} className="courses__content">
                                <Row>
                                    <Col sm={6}>
                                        <h6>Page 1 of {courseList.totalItems} results</h6>
                                    </Col>
                                    <Col sm={6}>
                                        <SortItem />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <CourseItemComponent courseList={courseList}/>
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