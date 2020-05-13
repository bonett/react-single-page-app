import React, { Component } from 'react';
import HeaderContent from '../../components/header-component';
import WrapperContent from '../../components/wrapper-content';
import _ from "lodash";

class BrowseCourses extends Component {
  constructor() {
    super();

    this.state = {
      courseList: null
    };
  }

  componentDidMount() {
    this.getCourseFeatured();
  }

  getCourseFeatured() {
    fetch('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true').then(resolve => {
      return resolve.json();
    }).then(data => {
      const featureList = _.map(data.items, o => _.extend({isFeatured: true}, o));
      this.getCourses(featureList);
    });
  }

  getCourses(featureList) {
    fetch('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME').then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courseList: _.merge(data, { featured: featureList})
      })
    });
  }

  render() {

    const { courseList } = this.state;

    return (
      <React.Fragment>
        <HeaderContent />
        {
          courseList ? <WrapperContent courseList={courseList} /> : null
        }
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
