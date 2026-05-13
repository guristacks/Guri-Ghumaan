import React from "react";
import Header from "./Components/Header-Section/header";
import Hero from "./Components/Hero-Section/hero";
import Work from "./Components/Work-Section/work";
import Script from "./script";

const App = () => {
  return (
    <>
      <Script />

      <Header />

      <main>
        <Hero />
        <Work />
      </main>
    </>
  );
};

export default App;