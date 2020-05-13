import React, { Component } from 'react';
import HeaderComponent from '../../components/header';
import WrapperComponent from '../../components/wrapper';
import _ from "lodash";

class BrowseCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseList: null,
      featureList: null,
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
    this.getCourses()
  }

  getCourseFeatured() {
    const { pageIndex, PageSize, sortField, profession, courseType } = this.state;

    fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&profession=${profession}&courseType=${courseType}&isFeatured=true`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        featureList: _.map(data.items, o => _.extend({ isFeatured: true }, o))
      })
    });
  }

  getCourses() {

    const { pageIndex, PageSize, sortField, profession, courseType, state } = this.state;

    const professionType = parseInt(profession);

    fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&state=${state}&profession=${professionType}&courseType=${courseType}`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courseList: data
      });
    });
  }

  getSelectStateOption = (option) => {
    this.setState({
      state: option
    });

    this.getCourses();
  }

  getSelectMedicalOption = (option) => {
    this.setState({
      profession: option
    });

    this.getCourses();
  }

  getSelectSortOption = (option) => {
    this.setState({
      sortField: option
    });

    this.getCourses();
  }

  getNextPage = (size) => {

    const { pageIndex } = this.state;

    this.setState({
      pageIndex: pageIndex + size
    });

    this.getCourses();
  }

  getPreviousPage = (size) => {

    const { pageIndex } = this.state;

    this.setState({
      pageIndex: pageIndex - size
    });

    this.getCourses();
  }

  render() {

    const { courseList, state, profession, sortField, pageIndex, featureList } = this.state;

    return (
      <React.Fragment>
        <HeaderComponent state={state} profession={profession} sortField={sortField} selectStateOption={this.getSelectStateOption} selectMedicalOption={this.getSelectMedicalOption} />
        <WrapperComponent courseList={courseList} featureList={featureList} selectSortOption={this.getSelectSortOption} pageIndex={pageIndex} previousPageItems={this.getPreviousPage} nextPageItems={this.getNextPage} />
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
