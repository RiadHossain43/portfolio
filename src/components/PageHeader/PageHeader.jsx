import React from "react";

import { Container,Button } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Reyad• Hossain</h1>
          <h3 className="d-none d-sm-block">
            A passionate problem solver and full stack web application developer
          </h3>
          <Button className='btn-simple btn-success'>
            View my cv
          </Button>
        </div>
      </Container>
    </div>
  );
}
