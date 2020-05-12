import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './style.scss';
import CoursesContent from '../courses-content';

function WrapperContent() {
    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES">
                <CoursesContent />
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS">
                HOlis
            </Tab>
        </Tabs>
    );
}

export default WrapperContent;