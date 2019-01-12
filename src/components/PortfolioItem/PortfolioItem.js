import React, { Component } from 'react';
import './PortfolioItem.css';
import { Element } from 'react-scroll';
import { Button, Col, Thumbnail, Row, Grid } from 'react-bootstrap';



export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
      
      

        <Col xs={6} md={4}>
          <Thumbnail src={this.props.src} className="responsive">
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>
              <Button bsStyle="primary">Button</Button>
              &nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
    
      
    );
  }
}
