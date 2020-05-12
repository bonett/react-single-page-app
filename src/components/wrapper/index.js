import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.scss';
import TabsContent from '../tabs-content';
import TabsItem from '../tabs-item';

function WrapperContent() {
    return (
        <main>
            <Row>
                <Col>
                    <TabsItem />
                </Col>
            </Row>
            <div className="container">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col sm={4}>sm=4</Col>
                            <Col sm={8}>
                                <TabsContent />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </main>
    );
}

export default WrapperContent;