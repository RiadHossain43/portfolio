import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import Navbar from "components/Navbars/Navbar";
import Footer from "components/Footer/Footer";

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
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md='12'>
                <h1 className="text-center mt-5 ">
                  Weolcome to my blogs
                </h1>
                <p className='text-center  mb-5'>I love sharing my tech artiles that help developers better themselves </p>
                <p className='text-center  mb-5'>Blogs will be published soon</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
