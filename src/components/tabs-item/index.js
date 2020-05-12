import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import './style.scss';

function TasbContent() {
    return (
        <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example">
            <Tab eventKey="courses" title="COURSES">
                Hols
            </Tab>
            <Tab eventKey="providers" title="PROVIDERS">
                HOlis
            </Tab>
        </Tabs>
    );
}

export default TasbContent;