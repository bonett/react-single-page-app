import React, { Component } from 'react';
import HeaderContent from '../../components/header-component';
import WrapperContent from '../../components/wrapper-content';
import _ from "lodash";

class BrowseCourses extends Component {
  constructor() {
    super();

    this.state = {
      courseList: null,
      state: 'FL',
      sortField: 'RELEVANCE',
      profession: 36,
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

    const { pageIndex, PageSize, sortField, profession, courseType } = this.state;

    fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=${pageIndex}&pageSize=${PageSize}&sortField=${sortField}&profession=${profession}&courseType=${courseType}`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courseList: _.merge(data, { featured: featureList })
      })
    });
  }

  render() {

    const { courseList } = this.state;

    return (
      <React.Fragment>
        <HeaderContent />
        <WrapperContent courseList={courseList} />
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
