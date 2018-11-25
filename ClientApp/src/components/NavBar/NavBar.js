﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavBar.css';
import { scroller, Events, animateScroll as scroll } from 'react-scroll';




export class NavBar extends Component {
  displayName = NavBar.name

  scrollToLandingPage() {
    scroller.scrollTo('LandingPage', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToAbout() {
    scroller.scrollTo('About', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToPortfolio() {
    scroller.scrollTo('PortfolioItems', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#brand" className="LandingPage" to="ScrollLandingPage" onClick={() => this.scrollToLandingPage()} >Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
 
          
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className="About" to="ScrollAbout" onClick={() => this.scrollToAbout()}>
              About
            </NavItem>
            <NavItem eventKey={2} href="#" className="PortfolioItems" to="ScrollPortfolio" onClick={() => this.scrollToPortfolio()}>
              Portfolio
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
