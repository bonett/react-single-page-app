import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItem from '../course-item';
import FilterContent from '../filter';
import './style.scss';
import SortItem from '../sort-item';

function CoursesContent() {
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
                                        <h6>Page 1 of 1489 results</h6>
                                    </Col>
                                    <Col sm={6}>
                                        <SortItem />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <CourseItem />
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

export default CoursesContent;