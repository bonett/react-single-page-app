import React, { Component } from 'react';
import HeaderComponent from '../../components/header';
import WrapperComponent from '../../components/wrapper';
import _ from "lodash";

class BrowseCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseList: null,
      state: 'FL',
      sortField: 'RELEVANCE',
      profession: "36",
      courseType: 'CD_ANYTIME',
      pageIndex: 1,
      PageSize: 10
    };
  }

  componentDidMount() {
    this.getCourseFeatured();
  }

  getCourseFeatured() {
    const { pageIndex, PageSize, sortField, profession, courseType } = this.state;

    fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&profession=${profession}&courseType=${courseType}&isFeatured=true`).then(resolve => {
      return resolve.json();
    }).then(data => {
      const featureList = _.map(data.items, o => _.extend({ isFeatured: true }, o));
      this.getCourses(featureList);
    });
  }

  getCourses(featureList) {

    const { pageIndex, PageSize, sortField, profession, courseType, state } = this.state;

    const professionType = parseInt(profession);

    fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&state=${state}&profession=${professionType}&courseType=${courseType}`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courseList: _.merge(data, { featured: featureList })
      });
    });
  }

  getSelectStateOption = (option) => {
    this.setState({
      state: option
    });

    this.getCourseFeatured();
  }

  getSelectMedicalOption = (option) => {
    this.setState({
      profession: option
    });

    this.getCourseFeatured();
  }

  getSelectSortOption = (option) => {
    this.setState({
      sortField: option
    });

    this.getCourseFeatured();
  }

  render() {

    const { courseList, state, profession, sortField } = this.state;

    return (
      <React.Fragment>
        <HeaderComponent state={state} profession={profession} sortField={sortField} selectStateOption={this.getSelectStateOption} selectMedicalOption={this.getSelectMedicalOption} />
        <WrapperComponent courseList={courseList} selectSortOption={this.getSelectSortOption} />
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
