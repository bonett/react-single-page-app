import React from 'react';
import Skeleton from 'react-skeleton-loader';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './style.scss';

const SkeletonComponent = () => {

    return (
        <React.Fragment>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col xs={4} className="card__item-media">
                            <Skeleton count={1} width="200px" height="150px" borderRadius="0px" />
                        </Col>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col xs={4} className="card__item-media">
                            <Skeleton count={1} width="200px" height="150px" borderRadius="0px" />
                        </Col>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col xs={4} className="card__item-media">
                            <Skeleton count={1} width="200px" height="150px" borderRadius="0px" />
                        </Col>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="card__item">
                <Card.Body>
                    <Row>
                        <Col className="card__item-caption">
                            <h3 className="card__item-caption--title"><Skeleton count={1} height="20px" borderRadius="0px" /></h3>
                            <h3 className="card__item-caption--title"><Skeleton count={1} width="50px" height="14px" borderRadius="0px" /></h3>
                            <p className="card__item-caption--description"><Skeleton count={1} height="20px" borderRadius="0px" /></p>
                            <div className="card__item-caption-extra">
                                <Skeleton count={1} height="20px" borderRadius="0px" />
                            </div>
                        </Col>
                        <Col xs={2} className="card__item-feed">
                            <h2 className="card__item-feed--prize">
                                <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                            </h2>
                            <Skeleton count={1} width="70px" height="20px" borderRadius="0px" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SkeletonComponent;