import React, { Component } from 'react';
import './PortfolioItem.css';
import { Element } from 'react-scroll';
import { Button, Col, Card, Thumbnail, Row} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import trailer from'./images/Trailer.mp4';
import { Player } from 'video-react';
// import css

{/* <link rel="stylesheet" href="/css/video-react.css" /> */}

export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
       
          <Col lg={4} sm={6} portfolio-item>
            <Card className="responsive">
            {/* <Card.Img variant="top" src={this.props.src} /> */}

          <Player
            playsInline
            poster="/assets/poster.png"
            src={trailer}
          />
                     
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <Button variant="secondary" href={this.props.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
      
    );
  }
}

// <Card src={this.props.src} className="responsive">
// <h4 className="card-title">{this.props.title}</h4>
// <p className="card-text">{this.props.description}</p>
// <p>
// <Button variant="dark">Secondary</Button>
 
// </p>
// </Card>