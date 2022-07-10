import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import AboutBody from '../../components/body/AboutBody';
import Footer from '../../components/footer/Footer';
import Last from '../../components/body/Last';

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutBody />
        <Last />
        <Footer />
    </div>
  )
}

export default About