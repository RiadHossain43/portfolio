
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container><h1 className="text-center">Little about me</h1></Container>
      </section>
      <section className="section section-lg section-safe">
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md="5">
              <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/chester-wade.jpg").default}
              />
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">573 K</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">10 425</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <h3>Software engineer</h3>
                <p>
                  Self taught software enginner with loads of thrive and motivation 
                  to learn new thechnologies quicly. I love to solve complex problems.
                  And design scalable architecture,
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h6>Carefully crafted components</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Amazing page examples</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Super friendly support team</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
