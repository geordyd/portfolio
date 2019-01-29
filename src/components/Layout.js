import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { NavBar } from './NavBar/NavBar';
import { LandingPage } from './LandingPage/LandingPage';
import { About } from './About/About';
import { PortfolioItems } from './PortfolioItems/PortfolioItems';


export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className="background">
        <Container fluid>
          <Row> 
            
            <NavBar />
            
            <LandingPage />
            
            <About />         

            <PortfolioItems />

            <Col sm={9}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
