
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Navbar from "components/Navbars/Navbar"
import Footer from 'components/Footer/Footer'
import {InputFiled} from 'components/Form/Inputs'
import {CButton} from 'components/Form/Buttons'

export default function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Hello!!</h1>
                    <h5 className="text-on-back">Say</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <InputFiled 
                            label='Your name'
                            placeholder='Name'
                          />
                        </Col>
                        <Col md="6">
                          <InputFiled 
                            label='Email address'
                            placeholder='email@domain.com'
                            type="email"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <InputFiled 
                            label='Phone'
                            placeholder='001-12321345'
                            type="phone"
                          />
                        </Col>
                        <Col md="6">
                        <InputFiled 
                            label='Company'
                            placeholder='Your company'
                            type="text"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <InputFiled 
                            label='Message'
                            placeholder='Hello there!'
                            type="textarea"
                          />
                        </Col>
                      </Row>
                      <CButton
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </CButton>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="fab fa-linkedin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Ping me over linked in</h4>
                    <a  href="#pablo" className='text-info'>
                      Riad Hossain
                    </a>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find me at</h4>
                    <p>
                      109/c Barontek Dhaka Cantoment <br />
                      Dhaka 1206 <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give me a ring</h4>
                    <p>
                      Reyad Hossain <br />
                      +880 1644417464 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
