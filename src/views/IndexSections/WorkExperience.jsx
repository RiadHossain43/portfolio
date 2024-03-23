import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import imsTechnologiesCollege from "assets/img/ims-technologies-college.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <h1 className="text-center">Work experience</h1>
        </Container>
      </section>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <hr className="line-danger" />
              <h3 className="text-white">iMS Technologies</h3>
              <p className="text-white mb-3">
                A wonderful technology company based in UK that works on digital
                trasformation. <strong>iMS Systems</strong> is a SaaS that helps
                organizations to trasform their business operations digitally. I
                was the tech lead at iMS Systems.
              </p>
              <div className="btn-wrapper mb-3">
                <a href="https://imssystems.tech">
                  <p className="category text-success d-inline">View company</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </a>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="5" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={imsTechnologiesCollege}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
