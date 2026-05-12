import React from "react";
import Header from "./Components/Header-Section/header";
import Hero from "./Components/Hero-Section/hero";
import Work from "./Components/Work-Section/work";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
      </main>
    </>
  );
};

export default App;
