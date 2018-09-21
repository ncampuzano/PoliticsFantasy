import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import PoliticsMenu from '../Shared/PoliticsMenu';

class Hierarchy extends Component {
  render() {
    return (
      <Grid fluid style={{ marginTop: 70 }}>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              Menu opciones
            </Row>
            <Row>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <PoliticsMenu />
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default Hierarchy;