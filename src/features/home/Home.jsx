import React from "react";
import { Section, ServiceCard, ServiceStep } from "./components/component-exporter";
import { Card, SlideCard, Testimonials } from "../../resusable-components/resusable-components-exporter";


const Home = () => {
  return (
    <div>
      <Section/>  
      <Card/>
      <ServiceStep/>
      <Testimonials />
      <SlideCard/>
      <ServiceCard/>
    

    </div>
  );
}

export default Home;
