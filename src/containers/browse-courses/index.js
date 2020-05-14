import React, { useState, useEffect } from 'react';
import HeaderComponent from '../../components/header';
import WrapperComponent from '../../components/wrapper';
import _ from "lodash";

const BrowseCourses = () => {

  const [courseList, setCourseList] = useState(null);
  const [featureList, setFeatureList] = useState(null);
  const [state, setState] = useState('FL');
  const [sortField, setSortField] = useState('RELEVANCE');
  const [profession, setProfession] = useState('36');
  const [courseType] = useState('CD_ANYTIME');
  const [pageIndex, setPageIndex] = useState(1);
  const [PageSize] = useState(10);
  const [deliveryType] = useState('ANY');
  const [subjectArea] = useState('ANYSUB');

  useEffect(() => {
    async function getCourseFeatured() {
      try {
        const response = await fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&profession=${profession}&courseType=${courseType}&isFeatured=true`);
        const data = await response.json();
        const newData = _.map(data.items, o => _.extend({ isFeatured: true }, o));
        setFeatureList(newData);
      } catch (e) {
        console.error(e);
      }
    }

    async function getCourses() {
      try {
        const professionType = parseInt(profession);
        const response = await fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&state=${state}&profession=${professionType}&courseType=${courseType}`);
        const data = await response.json();
        setCourseList(data);
      } catch (e) {
        console.error(e);
      }
    }

    getCourseFeatured();
    getCourses();
  }, [pageIndex, state, profession, courseType]);

  const getSelectStateOption = (option) => {
    setState(option)
  }

  const getSelectMedicalOption = (option) => {
    setProfession(option);
  }

  const getSelectSortOption = (option) => {
    setSortField(option);
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
        state={state}
        profession={profession}
        sortField={sortField}
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
        deliveryType={deliveryType}
        courseType={courseType}
        subjectArea={subjectArea}
      />
    </React.Fragment>
  )
}

export default BrowseCourses;
