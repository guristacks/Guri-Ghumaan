import React from "react";
import ProcessTitle from "./ProcessTitle";
import AllProcess from "./AllProcess";

const Process = () => {
  return (
    <section className="processSec">
      <div className="container">
        <ProcessTitle />
        <AllProcess />
      </div>
    </section>
  );
};

export default Process;
