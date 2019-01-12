import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Grid, Row } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
//image import
import image from'./images/Naamloos.png';
import image2 from'./images/img2.png';

export class PortfolioItems extends Component {
  displayName = PortfolioItems.name

  render() {
    return (
      <div>
        <Element name="PortfolioItems" className="element">
          <div className="flex-container">
            <div>
              <Grid>
                <Row>
                  <PortfolioItem src={image} description="This is a sample project"/>
                  <PortfolioItem src={image2} description="This is a sample project"/>
                  <PortfolioItem src={image} description="This is a sample project"/>
                  <PortfolioItem src={image2} description="This is a sample project"/>
                  <PortfolioItem src={image} description="This is a sample project"/>
                  <PortfolioItem src={image2} description="This is a sample project"/>
                  
                </Row>
              </Grid>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}
