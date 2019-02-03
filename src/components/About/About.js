import React, { Component } from 'react';
import './About.css';
import { Element } from 'react-scroll';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export class About extends Component {
  displayName = About.name

  render() {
    return (
      <div>
        <Element name="About" className="element" >
          <div className="flex-container">
          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="2018 – Present"
              style={{ color: '#5c5f66' }}
            >
              <h3>Studying Software Engeneering</h3>
              <p>
                I started studying at the Hogeschool in Rotterdam for a bachelor degree in Software Engeneering.
              </p>
            </TimelineItem>
          </Timeline>
          </div>
        </Element>
      </div>
    );
  }
}
