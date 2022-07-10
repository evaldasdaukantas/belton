import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/body/Hero';
import Middle from '../../components/body/Middle';
import Middle2 from '../../components/body/Middle2';
import Middle3 from '../../components/body/Middle3';
import Middle4 from '../../components/body/Middle4';
import Last from '../../components/body/Last';

const Home = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Middle />
    <Middle2 />
    <Middle3 />
    <Middle4 />
    <Last />
    <Footer />
    </div>
  )
}

export default Home