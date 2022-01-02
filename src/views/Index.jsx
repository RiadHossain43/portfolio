import React from "react";

// core components
import Navbar from "components/Navbars/Navbar";
import PageHeader from "components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer";
// sections for this page/view
import WorkExperience from 'views/IndexSections/WorkExperience'
import Story from 'views/IndexSections/Story'
import CallToAction from 'views/IndexSections/CallToAction'
import Skills from 'views/IndexSections/Skills'

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Story/>
          <WorkExperience/>
          <Skills/>
          <CallToAction/>
        </div>
        <Footer />
      </div>
    </>
  );
}
