import React from "react";
import Header from "../../components/header/Header";
import UxUiDescription from "../../components/uxuiDescription/UxUiDescription";
import UxUiBlock from "../../components/uxuiBlock/UxUiBlock";
import CourseAdvantages from "../../components/advantagesPython/AdvantagesPython";
import MainModules from "../../components/mainModules/MainModules";

const UxUiPage = () => {
  return (
    <>
      <UxUiDescription />
      <UxUiBlock />
      <CourseAdvantages/>
      <MainModules/>
    </>
  );
};

export default UxUiPage;
