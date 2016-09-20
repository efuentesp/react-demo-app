import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Loading = () => {

  return (
    <Row>
      <Col sm={12}>
        <div className="animationload">
          <div className="osahanloading" />
        </div>
      </Col>
    </Row>
  );
};

export default Loading;
