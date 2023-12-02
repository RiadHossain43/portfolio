import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import Navbar from "components/Navbars/Navbar";
import Footer from "components/Footer/Footer";
import denys from "assets/img/denys.jpg";
import fabienBazanegue from "assets/img/fabien-bazanegue.jpg";
import markFinn from "assets/img/mark-finn.jpg";

import ims_01 from "assets/img/ims-portfolio/ims-01.png";
import ims_02 from "assets/img/ims-portfolio/ims-02.png";
import ims_03 from "assets/img/ims-portfolio/ims-03.png";
import ims_04 from "assets/img/ims-portfolio/ims-04.png";
import ims_05 from "assets/img/ims-portfolio/ims-05.png";
import ims_06 from "assets/img/ims-portfolio/ims-06.png";
import ims_07 from "assets/img/ims-portfolio/ims-07.png";
import ims_08 from "assets/img/ims-portfolio/ims-08.png";
import ims_09 from "assets/img/ims-portfolio/ims-09.png";
import ims_10 from "assets/img/ims-portfolio/ims-10.png";
import ims_11 from "assets/img/ims-portfolio/ims-11.png";
import ims_12 from "assets/img/ims-portfolio/ims-12.png";
import ims_13 from "assets/img/ims-portfolio/ims-13.png";
import ims_14 from "assets/img/ims-portfolio/ims-14.png";
import ims_15 from "assets/img/ims-portfolio/ims-15.png";
import ims_16 from "assets/img/ims-portfolio/ims-16.png";
import ims_17 from "assets/img/ims-portfolio/ims-17.png";
import ims_18 from "assets/img/ims-portfolio/ims-18.png";
import ims_19 from "assets/img/ims-portfolio/ims-19.png";
import ims_20 from "assets/img/ims-portfolio/ims-20.png";
import ims_21 from "assets/img/ims-portfolio/ims-21.png";
import ims_22 from "assets/img/ims-portfolio/ims-22.png";

import alice_01 from "assets/img/alice-portfolio/alice-01.png";
import alice_02 from "assets/img/alice-portfolio/alice-02.png";
import alice_03 from "assets/img/alice-portfolio/alice-03.png";

import alice_addin_01 from "assets/img/alice-addin-portfolio/alice-addin-01.png";
import alice_addin_02 from "assets/img/alice-addin-portfolio/alice-addin-02.png";
import alice_addin_03 from "assets/img/alice-addin-portfolio/alice-addin-03.png";
import alice_addin_04 from "assets/img/alice-addin-portfolio/alice-addin-04.png";
import alice_addin_05 from "assets/img/alice-addin-portfolio/alice-addin-05.png";

import ai_analytics_01 from "assets/img/ai-analytics-portfolio/ai-analytics-01.png";
import ai_analytics_02 from "assets/img/ai-analytics-portfolio/ai-analytics-02.png";
import ai_analytics_03 from "assets/img/ai-analytics-portfolio/ai-analytics-03.png";
import ai_analytics_04 from "assets/img/ai-analytics-portfolio/ai-analytics-04.png";

const imsCarouselItems = [
  { src: ims_01, altText: "ims-01", caption: "" },
  { src: ims_02, altText: "ims-02", caption: "" },
  { src: ims_03, altText: "ims-03", caption: "" },
  { src: ims_04, altText: "ims-04", caption: "" },
  { src: ims_05, altText: "ims-05", caption: "" },
  { src: ims_06, altText: "ims-06", caption: "" },
  { src: ims_07, altText: "ims-07", caption: "" },
  { src: ims_08, altText: "ims-08", caption: "" },
  { src: ims_09, altText: "ims-09", caption: "" },
  { src: ims_10, altText: "ims-10", caption: "" },
  { src: ims_11, altText: "ims-11", caption: "" },
  { src: ims_12, altText: "ims-12", caption: "" },
  { src: ims_13, altText: "ims-13", caption: "" },
  { src: ims_14, altText: "ims-14", caption: "" },
  { src: ims_15, altText: "ims-15", caption: "" },
  { src: ims_16, altText: "ims-16", caption: "" },
  { src: ims_17, altText: "ims-17", caption: "" },
  { src: ims_18, altText: "ims-18", caption: "" },
  { src: ims_19, altText: "ims-19", caption: "" },
  { src: ims_20, altText: "ims-20", caption: "" },
  { src: ims_21, altText: "ims-21", caption: "" },
  { src: ims_22, altText: "ims-22", caption: "" },
];

const aliceCarouselItems = [
  { src: alice_01, altText: "alice-01", caption: "" },
  { src: alice_02, altText: "alice-02", caption: "" },
  { src: alice_03, altText: "alice-03", caption: "" },
];
const aliceAddinCarouselItems = [
  { src: alice_addin_01, altText: "alice-addin-01", caption: "" },
  { src: alice_addin_02, altText: "alice-addin-02", caption: "" },
  { src: alice_addin_03, altText: "alice-addin-03", caption: "" },
  { src: alice_addin_04, altText: "alice-addin-04", caption: "" },
  { src: alice_addin_05, altText: "alice-addin-05", caption: "" },
];
const aiAnalyticsCarouselItems = [
  { src: ai_analytics_01, altText: "ai-analytics-01", caption: "" },
  { src: ai_analytics_02, altText: "ai-analytics-02", caption: "" },
  { src: ai_analytics_03, altText: "ai-analytics-03", caption: "" },
  { src: ai_analytics_04, altText: "ai-analytics-04", caption: "" },
];

export default function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <h1 className="text-center mt-5 ">Weolcome to my showcase</h1>
                <p className="text-center  mb-5">
                  Here i've got some of my top projects to show you.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col md="5">
                <h1 className="profile-title text-left">iMS Systems</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description text-left">
                  iMS Systems is a live project that i had built for a UK based
                  company. It was designed to help executives and leaders make
                  informed decisions based on real time data. This system
                  enables an organisation to feed data into a contextual
                  dashboard, giving assurance and visibility of the
                  organisational state.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={imsCarouselItems} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={aliceCarouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Alice</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  Alice is designed to engage users with intelligent and
                  customizable conversations, offering a seamless and
                  personalized experience. I have used Chat GPT api in this
                  project for conversation and Stripe api for payment
                  automation. The full stack has been developed by me and
                  deployed to AWS.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <h1 className="profile-title text-left">
                  Microsoft Word Add-in
                </h1>
                <h5 className="text-on-back">03</h5>
                <p className="profile-description text-left">
                  Alice, the microsoft word add in has been been developed to
                  enable users with ai assisted editing capabilities and
                  compliance reviews agains different documents. The project is
                  live on Microsoft Word Add-in store.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={aliceAddinCarouselItems} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={aiAnalyticsCarouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">
                  OpenAI based data analytics
                </h1>
                <h5 className="text-on-back">04</h5>
                <p className="profile-description text-left">
                  This is a pet project of mine that actually renders charts
                  from a given excell of CSV datasets, based on any query users
                  makes. Simply ask for any analytics in natural language and ai
                  will genrate visualisations based on your data.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
