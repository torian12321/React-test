import React from 'react';

import {
  // Form
  Button,

  // Grid
  Container, Row, Col,

  // UI
  Article, Progress
} from 'export';

const Main = props =>(
  <Container>
    <Row>
      <Col xs={6}><Progress /></Col>
      <Col xs={6}><Progress /></Col>
      <Col xs={6}><Progress /></Col>
      <Col xs={6}><Progress /></Col>
      <Col xs={12}><Progress /></Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} md={4}><Article /></Col>
      <Col xs={12} sm={6} md={4}><Article /></Col>
      <Col xs={12} sm={6} md={4}><Article /></Col>
      <Col xs={12} sm={6} md={4}><Article /></Col>
      <Col xs={12} sm={6} md={4}><Article /></Col>
    </Row>
  </Container>
);


module.exports = Main;