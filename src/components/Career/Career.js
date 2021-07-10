import React, { Component } from 'react';
import './Career.css';
import { Element } from 'react-scroll';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export class Career extends Component {
  displayName = Career.name

  render() {
    return (
      <div>
        <Element name="Career" className="element" >
          <div className="flex-container">
          <Timeline lineColor={'#ddd'}>
          <TimelineItem
              key="001"
              dateText="Sept. 2020 – Feb. 2021"
              style={{ color: '#5c5f66' }}
            >
              <h3>Internship Erasmus University Rotterdam</h3>
              <p className="timelineP">
                I started my internship at the Erasmus University in Rotterdam at the IT Development department.
              </p>
            </TimelineItem>
            <TimelineItem
              key="001"
              dateText="2017 – Present"
              style={{ color: '#5c5f66' }}
            >
              <h3>Studying Software Engeneering</h3>
              <p className="timelineP">
                I started studying at the Hogeschool in Rotterdam for a bachelor degree in Software Engeneering.
              </p>
            </TimelineItem>
            
            <TimelineItem
              key="002"
              dateText="2016 – 2017"
              style={{ color: '#5c5f66' }}
            >
              <h3>Koolhaas Concepts</h3>
              <p className="timelineP">
                I worked as a warehouse worker at Koolhaas Concepts.
              </p>
            </TimelineItem>

            <TimelineItem
              key="003"
              dateText="2013 – 2015"
              style={{ color: '#5c5f66' }}
            >
              <h3>DAKA Sport</h3>
              <p>
                I worked as a salesman at DAKA Sports.
              </p>
            </TimelineItem>

          </Timeline>
          </div>
        </Element>
      </div>
    );
  }
}
