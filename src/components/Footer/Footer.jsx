import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Reyad•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Blogs
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink>
                  Contact me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="mailto:riadhossain7464@gmail.com">
                  riadhossain7464@gmail.com
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Phone : +8801644417464
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Find me on:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
