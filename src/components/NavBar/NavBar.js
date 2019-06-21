import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import { scroller } from 'react-scroll';




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
      <Navbar expand="lg" className="fixed-top" variant="dark">
        <Navbar.Brand href="#home" className="LandingPage" to="ScrollLandingPage" onClick={() => this.scrollToLandingPage()}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey={1} href="#" className="About" to="ScrollAbout" onClick={() => this.scrollToAbout()}>About</Nav.Link>
            <Nav.Link eventKey={2} href="#" className="PortfolioItems" to="ScrollPortfolio" onClick={() => this.scrollToPortfolio()}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
