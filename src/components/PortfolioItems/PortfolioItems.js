import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Row, Container } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

//image import
import webshop from'./images/webshop.png';


export class PortfolioItems extends Component {
  displayName = PortfolioItems.name
  
  render() {

    return (     
    
        <Element name="PortfolioItems" className="element">
          <div className="flex-container">
            <div>
              <Container>
                   
                  <div className="item-container">
                    <Row>
                      <PortfolioItem src={webshop} title="Project Webshop" description="For this project we had to make a webshop that sells boats and boat parts." link="https://github.com/HalimSD/webStore1" video="./static/media/Trailer.b070b870.mp4"/>
                      <PortfolioItem src={webshop} title="Project Sogeti" description="For this project we had to make a webshop that sells boats and boat parts." link="https://www.youtube.com/watch?v=CbVWhDpEFa8" video="/static/media/Trailer2.3b9411e6.mp4"/>
                    </Row>
                  </div>
                
              </Container>
            </div>
          </div>
        </Element>
      
    );
  }
}
