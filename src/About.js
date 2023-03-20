// import React, { useContext } from 'react'
import Herosection from './components/Herosection'
import { useProductContext } from './context/productcontext';

const About = () => {

  const {myname} = useProductContext()

  const data = {
    name: "About Page",
  };

  return (

    <>
      {myname}
      <Herosection myData={data} />;
    </>
  )
}

export default About