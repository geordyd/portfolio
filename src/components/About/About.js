import React, { Component } from 'react';
import './About.css';
import { Element } from 'react-scroll';

export class About extends Component {
  displayName = About.name

  render() {
    return (
      <div>
        <Element name="About" className="element" >
          <div className="flex-container">
            <div>
              <h1>About</h1>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
