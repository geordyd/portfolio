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
                      <PortfolioItem src={image} title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae." link="http://www.google.com"/>
                      <PortfolioItem src={image2} title="Project 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
                      <PortfolioItem src={image} title="Project 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>                  
                      <PortfolioItem src={image2} title="Project 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
                      <PortfolioItem src={image} title="project 5" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
                      <PortfolioItem src={image2} title="project 6" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>  
                    </Row>
                  </div>
                
              </Container>
            </div>
          </div>
        </Element>
      
    );
  }
}
