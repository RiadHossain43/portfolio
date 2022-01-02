import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// import {Link} from 'react-router-dom'
// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <Row>
            <Col className='ml-auto' md='5'>
              <div className='info info-horizontal'>
                <div className="icon icon-success">
                  <img src={require('assets/img/circle-success.png').default} alt="" className="bg-blob"/>
                  <i className="tim-icons icon-html5"/>
                </div>
                <div className="description">
                  <h3 className="info-title">
                    Mern stack
                  </h3>
                  <p>
                    Wroked on complex mern stack projects that deals with authentication, rest api,
                    multi-tenant software architecture, RBAC system and data analytics.
                  </p>
                  <p className="category text-success d-inline">Proficient</p>
                </div>
              </div>
            </Col>
            <Col className='mr-auto' md='5'>
              <div className='info info-horizontal'>
                <div className="icon icon-primary">
                  <img src={require('assets/img/circle-primary.png').default} alt="" className="bg-blob"/>
                  <i className="tim-icons icon-html5"/>
                </div>
                <div className="description">
                  <h3 className="info-title">
                    Design
                  </h3>
                  <p>
                    Good at building carefully crafted designs. Have worked enough on designing
                    UI with css and scss. Quite comfortable at writing resposive designs.
                  </p>
                  <p className="category text-success d-inline">Intermediate</p>
                </div>
              </div>
            </Col>
            <Col className='ml-auto' md='5'>
              <div className='info info-horizontal'>
                <div className="icon icon-info">
                  <img src={require('assets/img/circle-info.png').default} alt="" className="bg-blob"/>
                  <i className="tim-icons icon-html5"/>
                </div>
                <div className="description">
                  <h3 className="info-title">
                    System expert
                  </h3>
                  <p>
                    Always learning and analyzing system design patterns. And compare one with another. 
                    Always the focus is on the problem the business is trying to solve.
                  </p>
                  <p className="category text-success d-inline">Proficient</p>
                </div>
              </div>
            </Col>
            <Col className='mr-auto' md='5'>
              <div className='info info-horizontal'>
                <div className="icon icon-warning">
                  <img src={require('assets/img/circle-warning.png').default} alt="" className="bg-blob"/>
                  <i className="tim-icons icon-html5"/>
                </div>
                <div className="description">
                  <h3 className="info-title">
                    Analytical problem solving
                  </h3>
                  <p>
                    Many software depends on own set of algorithms which include 
                    solving comparetively new problems. So I also try to improve 
                    my data structures skills.
                  </p>
                  <p className="category text-success d-inline">Comfortable</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


