import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CourseListComponent from '../course-list-component';

import './style.scss';

const WrapperContent = (props) => {

    const { courseList } = props;

    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES">
                <CourseListComponent courseList={courseList} />
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS" disabled>
                Providers
            </Tab>
        </Tabs>
    );
}

WrapperContent.propTypes = {
    courseList: PropTypes.object.isRequired,
}


export default WrapperContent;