import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CourseListComponent from '../course-list-component';

import './style.scss';
import SpinnerComponent from '../shared-component/spinner-component';

const WrapperContent = (props) => {

    const { courseList } = props;

    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES">
                {
                    courseList ? <CourseListComponent courseList={courseList} /> : <SpinnerComponent />
                }
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS" disabled>
                Providers
            </Tab>
        </Tabs>
    );
}

WrapperContent.propTypes = {
    courseList: PropTypes.object,
}


export default WrapperContent;