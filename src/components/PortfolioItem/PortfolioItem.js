import React, { Component } from 'react';
import './PortfolioItem.css';
import { Element } from 'react-scroll';
import { Button, Col, Thumbnail, Row, Grid } from 'react-bootstrap';



export default class PortfolioItem extends Component {
  displayName = PortfolioItem.name

  render() {
    return (
      
      

        // <Col xs={6} md={4}>
        //   <Thumbnail src={this.props.src} className="responsive">
        //     <h3>{this.props.title}</h3>
        //     <p>{this.props.description}</p>
        //     <p>
        //       <Button bsStyle="primary">Button</Button>
        //       &nbsp;
        //       <Button bsStyle="default">Button</Button>
        //     </p>
        //   </Thumbnail>
        // </Col>
         <Col lg={4} sm={6} portfolio-item>
          <Thumbnail src={this.props.src} className="responsive">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.description}</p>
            <p>
              <a class="btn btn-primary" href="#">View Project</a>
            </p>
          </Thumbnail>
        </Col>


    
      
    );
  }
}
{/* <div class="col-lg-4 col-sm-6 portfolio-item">
<div class="card h-100">
  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
  <div class="card-body">
    <h4 class="card-title">
      <a href="#">Project One</a>
    </h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
  </div>
</div>
</div> */}