import React from "react";
import Python from "../../components/banner-block/Banner-block";
import PythonBlock from "../../components/python-block/PythonBlock";
import AdvantagesPython from "../../components/advantagesPython/AdvantagesPython";
import Benefits from "../../components/benefits/Benefits";

function PythonPage() {
  return (
    <div>
      <Python />
      <PythonBlock />
      <AdvantagesPython />
      <Benefits/>
    </div>
  );
}

export default PythonPage;
