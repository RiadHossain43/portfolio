import React, { useState } from "react";
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
  UncontrolledAlert,
} from "reactstrap";
import Navbar from "components/Navbars/Navbar";
import Footer from "components/Footer/Footer";
import { InputFiled } from "components/Form/Inputs";
import { CButton } from "components/Form/Buttons";
import * as yup from "yup";
import useForm from "hooks/useForm";
export default function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const postData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const [submitted, setsubmitted] = useState(null);

  const schema = yup.object({
    name: yup.string().min(3).required().label("Name"),
    email: yup.string().min(3).email().required().label("Email"),
    phone: yup.number().required().label("Contact number"),
    company: yup.string().optional().label("Company"),
    message: yup.string().optional().label("Message"),

    // name: yup.string().optional().label("Name"),
    // email: yup.string().optional().label("Email"),
    // phone: yup.string().optional().label("Contact number"),
    // company: yup.string().optional().label("Company"),
    // message: yup.string().optional().label("Message"),
  });
  const {
    dataModel,
    handleChange,
    handleSubmit,
    isFormValid,
    validationErrors,
    isBusy,
  } = useForm(postData, schema);

  return (
    <>
      <Navbar />
      <div className="wrapper">
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
                            label="Your name"
                            placeholder="Name"
                            value={dataModel.name}
                            error={validationErrors.name}
                            onChange={(e) =>
                              handleChange({
                                field: "name",
                                value: e.currentTarget.value,
                              })
                            }
                          />
                        </Col>
                        <Col md="6">
                          <InputFiled
                            label="Email address"
                            placeholder="email@domain.com"
                            type="email"
                            value={dataModel.email}
                            error={validationErrors.email}
                            onChange={(e) =>
                              handleChange({
                                field: "email",
                                value: e.currentTarget.value,
                              })
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <InputFiled
                            label="Phone"
                            placeholder="001-12321345"
                            type="phone"
                            value={dataModel.phone}
                            error={validationErrors.phone}
                            onChange={(e) =>
                              handleChange({
                                field: "phone",
                                value: e.currentTarget.value,
                              })
                            }
                          />
                        </Col>
                        <Col md="6">
                          <InputFiled
                            label="Company"
                            placeholder="Your company"
                            type="text"
                            value={dataModel.company}
                            error={validationErrors.company}
                            onChange={(e) =>
                              handleChange({
                                field: "company",
                                value: e.currentTarget.value,
                              })
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <InputFiled
                            label="Message"
                            placeholder="Hello there!"
                            type="textarea"
                            value={dataModel.message}
                            error={validationErrors.message}
                            onChange={(e) =>
                              handleChange({
                                field: "message",
                                value: e.currentTarget.value,
                              })
                            }
                          />
                        </Col>
                      </Row>
                      <CButton
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        disabled={!isFormValid()}
                        onClick={(e) => {
                          handleSubmit(e, (d) => {
                            fetch(
                              "https://contact-me-pi.vercel.app/contact-me",
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify(d),
                              }
                            )
                              .then((response) => {
                                if (!response.ok) {
                                  throw new Error(
                                    "Network response was not ok"
                                  );
                                }
                                return response.json();
                              })
                              .then((data) => {
                                setsubmitted({
                                  success: true,
                                  message:
                                    "Thank you. I'll be in contact with you shortly.",
                                });
                              })
                              .catch((error) => {
                                setsubmitted({
                                  success: false,
                                  message: "Submission failed.",
                                });
                              });
                          });
                          isFormValid();
                        }}
                      >
                        {isBusy ? "Sending..." : "Send text"}
                      </CButton>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                    {submitted && submitted?.success && (
                      <UncontrolledAlert color="success">
                        {submitted.message}
                      </UncontrolledAlert>
                    )}
                    {submitted && !submitted?.success && (
                      <UncontrolledAlert color="danger">
                        {submitted.message}
                      </UncontrolledAlert>
                    )}
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
                    <a href="#pablo" className="text-info">
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
