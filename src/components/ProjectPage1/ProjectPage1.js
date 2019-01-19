import React, { Component } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';


//image import
import image from'./images/Naamloos.png';
import image2 from'./images/img2.png';


export default class ProjectPage1 extends Component {
  displayName = ProjectPage1.name

  render() {
    return (
      
      

      <div>
        <PortfolioItem src={image} title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
        <PortfolioItem src={image2} title="Project 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
        <PortfolioItem src={image} title="Project 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
        <PortfolioItem src={image2} title="Project 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
        <PortfolioItem src={image} title="project 5" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
        <PortfolioItem src={image2} title="project 6" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>  
      </div>
    
      
    );
  }
}
