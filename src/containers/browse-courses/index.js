import React, { useState, useEffect } from 'react';
import HeaderComponent from '../../components/header';
import WrapperComponent from '../../components/wrapper';
import _ from "lodash";

const BrowseCourses = () => {

  const [filterState, setFilterState] = useState({
    state: 'FL',
    sortField: 'RELEVANCE',
    profession: '36',
    courseType: 'CD_ANYTIME',
    pageSize: 10,
    deliveryType: 'ANY',
    subjectArea: 'ANYSUB'
  });

  const [pageIndex, setPageIndex] = useState(1);
  const [courseList, setCourseList] = useState(null);
  const [featureList, setFeatureList] = useState(null);


  useEffect(() => {
    async function getCourseFeatured() {
      try {
        const response = await fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${filterState.pageSize}&sortField=${filterState.sortField}&profession=${filterState.profession}&courseType=${filterState.courseType}&isFeatured=true`);
        const data = await response.json();
        const newData = _.map(data.items, o => _.extend({ isFeatured: true }, o));
        setFeatureList(newData);
      } catch (e) {
        console.error(e);
      }
    }

    async function getCourses() {
      try {
        const professionType = parseInt(filterState.profession);
        const response = await fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${filterState.pageSize}&sortField=${filterState.sortField}&state=${filterState.state}&profession=${professionType}&courseType=${filterState.courseType}`);
        const data = await response.json();
        setCourseList(data);
      } catch (e) {
        console.error(e);
      }
    }

    getCourseFeatured();
    getCourses();
  }, [pageIndex, filterState.state, filterState.profession, filterState.courseType]);

  const getSelectStateOption = (option) => {
    setFilterState({ state: option });
  }

  const getSelectMedicalOption = (option) => {
    setFilterState({ profession: option });
  }

  const getSelectSortOption = (option) => {
    setFilterState({ sortField: option });
  }

  const getNextPage = (size) => {
    setPageIndex(pageIndex + size);
  }

  const getPreviousPage = (size) => {
    setPageIndex(pageIndex - size);
  }

  return (
    <React.Fragment>
      <HeaderComponent
        state={filterState.state}
        profession={filterState.profession}
        sortField={filterState.sortField}
        selectStateOption={getSelectStateOption}
        selectMedicalOption={getSelectMedicalOption}
      />
      <WrapperComponent
        courseList={courseList}
        featureList={featureList}
        selectSortOption={getSelectSortOption}
        pageIndex={pageIndex}
        previousPageItems={getPreviousPage}
        nextPageItems={getNextPage}
        deliveryType={filterState.deliveryType}
        courseType={filterState.courseType}
        subjectArea={filterState.subjectArea}
      />
    </React.Fragment>
  )
}

export default BrowseCourses;
