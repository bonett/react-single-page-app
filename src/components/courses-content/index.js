import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CourseItem from '../course-item';
import FilterContent from '../filter';
import './style.scss';

function CoursesContent() {
    return (
        <div className="courses">
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={3}>
                                <div className="courses__filter">
                                    <FilterContent />
                                </div>
                            </Col>
                            <Col sm={9}>
                                <div className="courses__content">
                                    <CourseItem />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CoursesContent;