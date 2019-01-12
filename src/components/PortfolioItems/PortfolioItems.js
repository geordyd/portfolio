import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { PortfolioBlock } from '../PortfolioBlock/PortfolioBlock';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


export class PortfolioItems extends Component {
  displayName = PortfolioItems.name

  render() {
    return (
      <div>
        <Element name="PortfolioItems" className="element">
          <div className="flex-container">
            <div>
<ListGroup>
<ListGroupItem>

            <PortfolioBlock 
                name={"Item 1"} 
                description={"This is a short description of item 1"} 
                link={"Link"}
                />
</ListGroupItem>
<ListGroupItem>

                <PortfolioBlock 
                name={"Item 2"} 
                description={"This is a short description of item 2"} 
                link={"Link"}
                />
</ListGroupItem>
</ListGroup>

  
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
