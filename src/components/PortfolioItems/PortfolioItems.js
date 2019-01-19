import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Grid, Row, Pager, Button, Pagination } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ProjectPage1 from '../ProjectPage1/ProjectPage1';
import ProjectPage2 from '../ProjectPage1/ProjectPage2';



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
                  

                
                <Route exact path='/' component={ProjectPage1} />
      
        
                <Route exact path='/1/' component={ProjectPage2} />
                
                
                  
                  
                </Row>
                


              </Grid>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

// var counter = 0;
// var pageValue = "";

// function handleClick(e) {
//   e.preventDefault();
//   counter -= 1;
//   if(counter < 0){
//     counter = 0;
//   }

//   if (counter === 0){
//    pageValue = "/"
//   }else{
//     pageValue = counter;
//   }
//   console.log(counter);
// console.log(pageValue);
 
  
// }

// function handleClick2(e) {
//   e.preventDefault();
//   counter += 1;
//   if (counter > 2){
//     counter = 2;
//   }

//   if (counter === 0){
//     pageValue = "/"
//   }else{
//     pageValue = counter;
//   }
//    console.log(counter);
//    console.log(pageValue);
   
  

// }
