import React from 'react';

import {
  // Form
  Button,

  // Grid
  Container, Row, Col,

  // UI
  Article, Progress, Tabs
} from 'export';

const Main = props =>(
  <Container>

  <Tabs>
  <Tabs.Panel label="Tab 1">
      This is my tab 1 contents!!!!
  </Tabs.Panel>
  <Tabs.Panel label="Tab 2">
      <div>This is my tab 2 contents!</div>
  </Tabs.Panel>
  <Tabs.Panel label="Tab 3">
      <h1>Content 3</h1>
  </Tabs.Panel>
</Tabs>


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