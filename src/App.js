import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Lottie from "lottie-react";
import ballloader from "./assets/ballloader.json";
import { Provider } from "react-redux";
import { store } from "./Provider/store/store";
import DataProvider from "./Provider/data";

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  if (loader) {
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={ballloader} loop={true} />
    </div>;
  }
  return (
    <div className="bg-neutral-900 bg-no-repeat object-cover overflow-hidden">
      <Provider store={store}>
        <DataProvider>
          <Header />
          <Banner />
          <Nav />
          <About />
          <Skills />
          <Work />
          <Contact />
          <div className="h-[40px]"></div>
        </DataProvider>
      </Provider>
    </div>
  );
};

export default App;
