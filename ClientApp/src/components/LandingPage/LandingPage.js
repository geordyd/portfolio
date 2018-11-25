import React, { Component } from 'react';
import './LandingPage.css';
import { Element } from 'react-scroll';

export class LandingPage extends Component {
  displayName = LandingPage.name

  render() {
    return (
      <div>
        <Element name="LandingPage" className="element" >
          <div className="flex-container">
            <div>
              <h1>Landing Page</h1>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
