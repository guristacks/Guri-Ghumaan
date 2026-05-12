import React from "react";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Work from "./Components/work";

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
