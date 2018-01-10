import React from 'react';

import {
  // Page
  Header, Footer, SideMenu,

  // Form
  Button,

  // Grid
  Container, Row, Col,

  // UI
  Article, Progress, Tabs
} from '../components';

const Main = props =>(
  <div>
    <Header>
      Header content
    </Header>
    <SideMenu />

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
        <Col><Progress /></Col>
      </Row>
      <Row>
        <Col sm={6} md={4}><Article /></Col>
        <Col sm={6} md={4}><Article /></Col>
        <Col sm={6} md={4}><Article /></Col>
        <Col sm={6} md={4}><Article /></Col>
        <Col sm={6} md={4}><Article /></Col>
      </Row>
    </Container>

    <Footer>
      Footer content
    </Footer>
  </div>
);


module.exports = Main;
