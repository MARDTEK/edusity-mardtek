import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
const App = () => {

  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <div id="programs">
          <Title subTitle="Our PROGRAMS" title="What We Offer" />
          <Programs />
        </div>
        <div id="about">
          <About setPlayState={setPlayState} />
        </div>
        <div id="campus">
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
        </div>
        <div id="testimonials">
          <Title subTitle="TESTIMONIALS" title="What Student Says" />
          <Testimonials />
        </div>
        <div id="contact">
          <Title subTitle="Contact us" title="Get in Touch" />
          <Contact />
        </div>
        <Footer />
      </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
   
  );
};

export default App;
