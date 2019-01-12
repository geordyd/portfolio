import React, { Component } from 'react';
import './PortfolioBlock.css';



export class PortfolioBlock extends Component {
  displayName = PortfolioBlock.name

  render() {
    return (
      <div className="flexcontainer">
        
            

              <h1>{this.props.name}</h1>

              <p>{this.props.description}</p>

              <a href="">{this.props.link}</a>
          
        
      </div>
    );
  }
}
