import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CourseListComponent from '../course-list';

import './style.scss';

const WrapperComponent = (props) => {

    const {
        courseList,
        sortField,
        featureList,
        selectSortOption,
        pageIndex,
        previousPageItems,
        nextPageItems,
        totalPages,
        deliveryType,
        courseType,
        subjectArea } = props;

    const getSelectSortOption = (option) => {
        selectSortOption(option)
    }

    const getNextPage = (size) => {
        nextPageItems(size);
    }

    const getPreviousPage = (size) => {
        previousPageItems(size);
    }


    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES">
                <CourseListComponent
                    courseList={courseList}
                    totalPages={totalPages}
                    featureList={featureList}
                    sortField={sortField}
                    selectSortOption={getSelectSortOption}
                    pageIndex={pageIndex}
                    previousPageItems={getPreviousPage}
                    nextPageItems={getNextPage}
                    deliveryType={deliveryType}
                    courseType={courseType}
                    subjectArea={subjectArea}
                />
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS" disabled>
                Providers
            </Tab>
        </Tabs>
    );
}

WrapperComponent.propTypes = {
    courseList: PropTypes.object,
    featureList: PropTypes.array,
    sortField: PropTypes.string,
    selectSortOption: PropTypes.func,
    pageIndex: PropTypes.number,
    previousPageItems: PropTypes.func,
    nextPageItems: PropTypes.func,
    totalPages: PropTypes.number,
    deliveryType: PropTypes.string,
    courseType: PropTypes.string,
    subjectArea: PropTypes.string,
}


export default WrapperComponent;