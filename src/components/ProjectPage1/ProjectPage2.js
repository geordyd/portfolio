import React, { Component } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

//image import
import image from'./images/Naamloos.png';
import image2 from'./images/img2.png';


export default class ProjectPage2 extends Component {
  displayName = ProjectPage2.name

  render() {
    return (
      
      

        <div>
          <PortfolioItem src={image} title="Project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
          <PortfolioItem src={image2} title="Project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
          <PortfolioItem src={image} title="Project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
          <PortfolioItem src={image2} title="Project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
          <PortfolioItem src={image} title="project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>
          <PortfolioItem src={image2} title="project x" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."/>  
        </div>
    
      
    );
  }
}
