import React from "react";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Last from '../../components/body/Last';
import ServicesBody from '../../components/body/ServicesBody';

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesBody />
      <Last />
      <Footer />
    </div>
  );
};

export default Services;
