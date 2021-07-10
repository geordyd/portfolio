import React, { Component } from 'react';
import './PortfolioItems.css';
import { Element } from 'react-scroll';
import { Row, Container } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

//image import
import webshop from './images/webshop.png';
import minorai from './images/minorai.png';
import cultsense from './images/cultsense.png';
import isd from './images/isd.png';

function NewlineText() {
  const text = "In this project called Offsai. For the minor Artificial Intelligence we had the intention to build an AI. We had the idea to build an AI that recognizes offsides. \nProblem statement: Sometimes it can be difficult or time-consuming for a referee to signal an offside situation. With this project we investigate to what extent it is possible to determine offsides using artificial intelligence.";
  const newText = text.split('\n').map(str => <p>{str}</p>);
  
  return newText;
}
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
                  <PortfolioItem src={webshop} title="Project Webshop" description="For this project we had to make a webshop that sells boats and boat parts." link="https://github.com/HalimSD/webStore1" video="./static/media/Trailer.b070b870.mp4" />
                  <PortfolioItem src={webshop} title="Sogeti Project B" description="Epilepi is an app that tells what you as a bystander can do when someone has an epileptic seizure. A wristband detects the movements and heartbeat of the person wearing it. If the movements that the person makes with his arm are so violent and long, the wristband and telephone start to vibrate because this indicates an epileptic attack. Does the carrier not respond to either? Then the app will explain the situation to the bystanders through a speaker." link="https://www.sogeti.nl/updates/blog/hogeschool-rotterdam-wint-projectb-challenge-2019-met-wearable-voor-epileptische" video="./static/media/Trailer2.3858f1cd.mp4" />
                  <PortfolioItem src={minorai} title="Minor Artificial Intelligence" description={NewlineText()} />
                </Row>
                <Row>
                  <PortfolioItem src={cultsense} title="Cultsense" description="With the increase in mobility overall, and of tourism in particular, many places have been feeling increased visitor pressure. This has led to complaints from local residents in places that experience overcrowding. Since the numbers of visitors to many places are increasing, learning how to be a better traveller can be part of the solution. By working directly with young travellers, CULTSENSE aims at contributing to improve this situation on the long-term." link="https://www.cultsense.com" />
                  <PortfolioItem src={isd} title="Indices of Social Development" description="The Indices of Social Development is an innovative database, which allows new areas of research on social development, comparing various dimensions within countries, and their impact on other aspects of development. The following pages provide detailed explanations of the database." link="https://isd.iss.nl/" />
                </Row>
              </div>

            </Container>
          </div>
        </div>
      </Element>

    );
  }
}
