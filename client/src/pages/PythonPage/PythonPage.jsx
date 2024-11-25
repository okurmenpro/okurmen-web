import React from "react";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import python from "../../../public/images/python.png";
import PythonBlock from "../../components/python-block/PythonBlock";
import AdvantagesPython from "../../components/advantagesPython/AdvantagesPython";

function PythonPage() {
  const pythonDescription = `
  Python — это простой и мощный язык программирования, на котором можно создавать самые разные программы, 
  от небольших скриптов до крупных приложений и даже игр.
`;
  return (
    <div>
      <AboutCourse
        title="Python"
        description={pythonDescription}
        image={python}
        imageAlt="Python logo"
      />
      <PythonBlock />
      <AdvantagesPython />
    </div>
  );
}

export default PythonPage;
