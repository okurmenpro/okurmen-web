import React from "react";
import Backendpage1 from "../../components/backendpage1/Backendpage1";
import Backendpage2 from "../../components/backendpage2/Backendpage2";
import ModulsBackend from "../../components/modulsBackend/ModulsBackend";
import Benefits from "../../components/benefits/Benefits";

const BackendPage = () => {
  return (
    <div>
      <Backendpage1 />
      <Backendpage2 />
      <ModulsBackend />
      <Benefits/>
    </div>
  );
};

export default BackendPage;
