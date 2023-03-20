import React from 'react'
import FeaturedProducts from './components/FeaturedProducts';
import Herosection from './components/Herosection'
import Serices from './components/Serices';
import Trusted from './components/Trusted';

const Home = () => {

  const data = {
    name : "Home Page",
  };

  return (
    <>
      <Herosection myData={data} />;
      <FeaturedProducts/>
      <Serices />
      <Trusted/>
    </>
  )
}



export default Home