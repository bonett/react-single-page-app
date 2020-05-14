import React from 'react';
import TextTruncate from 'react-text-truncate';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImageComponent from '../shared/image';
import SmallComponent from '../shared/small';
import IconComponent from '../shared/icon';

const getTotalHourProfession = (course) => {
    let hours = 0;
    const components = course && course.components;

    components.forEach(component => {
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
        <Row>
            <Col sm={12}>
                {
                    courseList.map((item, index) => {
                        return (
                            <Card className="card__item" key={index}>
                                <Card.Body>
                                    <Row>
                                        {
                                            item.isFeatured ?
                                                <Col xs={12} sm={12} md={12} lg={4} className="card__item-media">
                                                    <ImageComponent image={getImageCourse(item)} />
                                                </Col> :
                                                null
                                        }
                                        <Col className="card__item-caption">
                                            <TextTruncate
                                                line={3}
                                                element="span"
                                                truncateText="…"
                                                text={item.course.name}
                                            />
                                            {
                                                item.isFeatured ? <SmallComponent text={'FEATURED'} /> : null
                                            }

                                            <p className="text text--color">{getProviderName(item.course)}</p>
                                            <div className="detail">
                                                <h4 className="detail-course detail-course--color"><IconComponent iconName={'clock-o'} /> {getTotalHourProfession(item.course)}</h4>
                                                <h4 className="detail-course detail-course--color"><IconComponent iconName={'laptop'} />{getDeliveryMethod(item.course)}</h4>
                                            </div>
                                        </Col>
                                        <Col xs={2} sm={2} md={2} lg={2} className="card__item-share">
                                            <h2 className="text text--color">
                                                {
                                                    item.isFree ? 'Free' : `$ ${item.price}`
                                                }
                                            </h2>
                                            <button onClick={(() => window.open(item.course.registrationWebsite))} className="share-button share-button--color"><i className="fa fa-share"></i></button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Col>
        </Row>
    );
}

CourseItemComponent.propTypes = {
    courseList: PropTypes.array,
}

export default CourseItemComponent;