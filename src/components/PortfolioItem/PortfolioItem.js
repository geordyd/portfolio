import React, { Component } from 'react';
import './PortfolioItem.css';
import { Element } from 'react-scroll';
import { Button, Col, Card, Thumbnail, Row} from 'react-bootstrap';



export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
      
        
          <Col lg={4} sm={6} portfolio-item>
            <Card src={this.props.src} className="responsive">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.description}</p>
              <p>
              <Button variant="dark">Secondary</Button>
                <a class="btn btn-primary" href="#">View Project</a>
              </p>
            </Card>
          </Col>
       


    
      
    );
  }
}
