import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';


export class PortfolioItems extends Component {
  displayName = PortfolioItems.name

  render() {
    return (
      <div>
        <Element name="PortfolioItems" className="element">
          <div className="flex-container">
            <div>
              <h1>Portfolio Items</h1>

              <p>This is test text boi</p>

              <p>This is test text boi</p>

            </div>
          </div>
        </Element>
      </div>
    );
  }
}
