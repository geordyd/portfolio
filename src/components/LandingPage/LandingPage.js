import React, { Component } from 'react';
import './LandingPage.css';
import { Element } from 'react-scroll';
import { Image, Col, /*Row*/ } from 'react-bootstrap';

export class LandingPage extends Component {
  displayName = LandingPage.name

  render() {
    return (
      <div>
        <Element name="LandingPage" className="element" >
          <div className="flex-container">
            <div>
              <Col>
                <Image src='https://via.placeholder.com/150' circle/>
              </Col>
              <div class="intro-name">Hello, I'm Geordy!</div>
              <div class="tagline">Student Software Engineering</div>
              
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
