import React, { Component } from 'react';
import HeaderContent from '../../components/header-component';
import WrapperContent from '../../components/wrapper-content';

class BrowseCourses extends Component {
  constructor() {
    super();

    this.state = {
      courseList: null
    };
  }

  componentDidMount() {
    fetch('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME').then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courseList: data
      })
    });
  }

  render() {
    
    const { courseList } = this.state;

    return (
      <React.Fragment>
        <HeaderContent />
        {
          courseList ? <WrapperContent courseList={courseList}/> : null
        }
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
