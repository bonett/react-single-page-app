import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './style.scss';

function TabsItem() {
    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES"></Tab>
            <Tab eventKey="providers" title="PROVIDERS"></Tab>
        </Tabs>
    );
}

export default TabsItem;