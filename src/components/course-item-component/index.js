import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import './style.scss';

const getTotalHourProfession = (course) => {
    let hours = 0;
    const components = course && course.components;

    components.forEach( component => {
        const profession = component.profession;
        hours += profession.totalHours;
    });

    return hours > 1 ? `${hours} Hours` : `${hours} Hour`;
}

const getDeliveryMethod = (course) => {
    const deliveryMethod = course && course.deliveryMethod,
        description = deliveryMethod && deliveryMethod.description;

    return description;
}

const getImageCourse = (item) => {
    const course = item && item.course,
        featuredBanner = course && course.featuredBanner;

    return `https://test.storage.cebroker.com/cebroker/${featuredBanner}`;
}

const getProviderName = (course) => {
    const provider = course && course.provider,
        name = provider && provider.name;

    return name;
}

const CourseItemComponent = (props) => {

    const { courseList } = props;

    return (
        <React.Fragment>
            {
                courseList.items.map((item, index) => {
                    return (
                        <Card className="card__item" key={index}>
                            <Card.Body>
                                <Row>
                                    {
                                        item.course.featuredBanner ?
                                            <Col xs={4} className="card__item-image">
                                                <Image src={getImageCourse(item)} fluid className="card__item-image--size" />
                                            </Col> :
                                            null
                                    }
                                    <Col className="card__item-caption">
                                        <h3 className="card__item-caption--title">{item.course.name}</h3>
                                        <small className="card__item-caption--featured">FEATURED</small>
                                        <p className="card__item-caption--description">{getProviderName(item.course)}</p>
                                        <div className="card__item-caption-extra">
                                            <h4><i className="fa fa-clock-o"></i> {getTotalHourProfession(item.course)}</h4>
                                            <h4><i className="fa fa-laptop"></i> {getDeliveryMethod(item.course)}</h4>
                                        </div>
                                    </Col>
                                    <Col xs={2} className="card__item-feed">
                                        <h2 className="card__item-feed--prize">
                                            {
                                                item.isFree ? 'Free' : `$ ${item.price}`
                                            }
                                        </h2>
                                        <a href={item.course.registrationWebsite} target="_blank" className="card__item-feed--share"><i className="fa fa-share"></i></a>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </React.Fragment>
    );
}

export default CourseItemComponent;