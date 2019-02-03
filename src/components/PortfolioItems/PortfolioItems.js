import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Grid, Row, Pager, Button, Pagination, Container } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ProjectPage1 from '../ProjectPage1/ProjectPage1';
import ProjectPage2 from '../ProjectPage1/ProjectPage2';
//image import
import image from'./images/Naamloos.png';
import image2 from'./images/img2.png';
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
                      <PortfolioItem src={webshop} title="Project Webshop" description="For this project we had to make a webshop that sells boats and boat parts." link="https://github.com/HalimSD/webStore1"/>
                    </Row>
                  </div>
                
              </Container>
            </div>
          </div>
        </Element>
      
    );
  }
}
