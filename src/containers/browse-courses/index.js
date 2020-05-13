import React, { Component } from 'react';
import HeaderContent from '../../components/header';
import WrapperContent from '../../components/wrapper-content';
import './style.scss';

class BrowseCourses extends Component {
  constructor() {
    super();

    this.state = {
      courses: null
    };
  }

  componentDidMount() {
    fetch('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME').then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        courses: data
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderContent />
        <WrapperContent />
      </React.Fragment>
    )
  }
}

export default BrowseCourses;
