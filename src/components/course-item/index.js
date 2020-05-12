import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import './style.scss';

const logo = require('./../../assets/img/course.png');

function CourseItem() {
    return (
        <React.Fragment>
            <Card className="card__item">
            <Card.Body>
                <Row>
                    <Col xs={4} className="card__item-image">
                        <Image src={logo} fluid className="card__item-image--size"/>
                    </Col>
                    <Col xs={6} className="card__item-caption">
                        <h3 className="card__item-caption--title">Preventing Medical Errors</h3>
                        <small className="card__item-caption--featured">FEATURED</small>
                        <p className="card__item-caption--description">FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</p>
                        <div className="card__item-caption-extra">
                            <h4><i className="fa fa-clock-o"></i> 1 Hours</h4>
                            <h4><i className="fa fa-laptop"></i> Computer-Based Training</h4>
                        </div>
                    </Col>
                    <Col xs={2} className="card__item-feed">
                        <h2 className="card__item-feed--prize">$ 20.00</h2>
                        <a href="#" className="card__item-feed--share"><i className="fa fa-share"></i></a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <Card className="card__item">
            <Card.Body>
                <Row>
                    <Col xs={4} className="card__item-image">
                        <Image src={logo} fluid className="card__item-image--size"/>
                    </Col>
                    <Col xs={6} className="card__item-caption">
                        <h3 className="card__item-caption--title">Preventing Medical Errors</h3>
                        <small className="card__item-caption--featured">FEATURED</small>
                        <p className="card__item-caption--description">FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</p>
                        <div className="card__item-caption-extra">
                            <h4><i className="fa fa-clock-o"></i> 1 Hours</h4>
                            <h4><i className="fa fa-laptop"></i> Computer-Based Training</h4>
                        </div>
                    </Col>
                    <Col xs={2} className="card__item-feed">
                        <h2 className="card__item-feed--prize">$ 20.00</h2>
                        <a href="#" className="card__item-feed--share"><i className="fa fa-share"></i></a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <Card className="card__item">
            <Card.Body>
                <Row>
                    <Col xs={4} className="card__item-image">
                        <Image src={logo} fluid className="card__item-image--size"/>
                    </Col>
                    <Col xs={6} className="card__item-caption">
                        <h3 className="card__item-caption--title">Preventing Medical Errors</h3>
                        <small className="card__item-caption--featured">FEATURED</small>
                        <p className="card__item-caption--description">FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER</p>
                        <div className="card__item-caption-extra">
                            <h4><i className="fa fa-clock-o"></i> 1 Hours</h4>
                            <h4><i className="fa fa-laptop"></i> Computer-Based Training</h4>
                        </div>
                    </Col>
                    <Col xs={2} className="card__item-feed">
                        <h2 className="card__item-feed--prize">$ 20.00</h2>
                        <a href="#" className="card__item-feed--share"><i className="fa fa-share"></i></a>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </React.Fragment>
    );
}

export default CourseItem;