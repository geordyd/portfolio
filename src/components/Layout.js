import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import { NavBar } from './NavBar/NavBar';
import { LandingPage } from './LandingPage/LandingPage';
import { About } from './About/About';
import { PortfolioItems } from './PortfolioItems/PortfolioItems';


export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <div className="background">
        <Grid fluid>
          <Row> 

            <NavBar />
            
            <LandingPage />
            
            <About />         

            <PortfolioItems />

            <Col sm={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
