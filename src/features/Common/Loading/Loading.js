import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Loading = () => {

  return (
    <Row>
      <Col sm={12}>
        <i className="fa fa-refresh fa-spin fa-2x fa-fw" aria-hidden="true" />
      </Col>
    </Row>
  );
};

export default Loading;
