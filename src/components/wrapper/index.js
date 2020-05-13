import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CourseListComponent from '../course-list';

import './style.scss';

const WrapperComponent = (props) => {

    const { courseList, sortField, selectSortOption } = props;

    const getSelectSortOption = (option) => {
        selectSortOption(option)
    }

    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES"> 
                <CourseListComponent courseList={courseList} sortField={sortField} selectSortOption={getSelectSortOption} />
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS" disabled>
                Providers
            </Tab>
        </Tabs>
    );
}

WrapperComponent.propTypes = {
    courseList: PropTypes.object,
    sortField: PropTypes.string,
    selectSortOption: PropTypes.func,
}


export default WrapperComponent;