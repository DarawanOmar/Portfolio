import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Lottie from 'lottie-react'
import ballloader from './assets/ballloader.json'

const App = () => {
  const[loader,setLoader] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  },[])
  if(loader){
    <div className='flex justify-center items-center h-screen'>
      <Lottie animationData={ballloader} loop={true}/>
    </div>
  }
  return (
    <div className='bg-neutral-900 bg-no-repeat object-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[40px]'></div>
    </div>
  );
};

export default App;
