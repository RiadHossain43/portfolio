
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import {Link} from 'react-router-dom'
// core components
export default function LandingPage() {
  return (
    <>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-center align-items-center text-center">
            <Col className='ml-auto  mr-auto mt-4' lg="8" md="8">
              <h3 className="text-white">
                Interested in my works?
              </h3>
              <p className="text-white mb-3">
                Wonderful products are built on wonderful collaboration.
                Lets built something great together. I'll be more than happy 
                to listen to your sotry.
              </p>
              <Link to='/contact'>
                <Button
                  className="btn-primary"
                  type='button'
                >
                  Contact me
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


