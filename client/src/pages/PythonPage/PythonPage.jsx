
import React from "react";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import python from "../../../public/images/python.png";
import PythonBlock from "../../components/python-block/PythonBlock";
import AdvantagesPython from "../../components/advantagesPython/AdvantagesPython";
import PriseCourse from "../../components/priceCourse/PriceCourse";

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
      <PriseCourse
        title="Python"
        // image={pythonLogo}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <AdvantagesPython />
    </div>
  );
}

export default PythonPage;