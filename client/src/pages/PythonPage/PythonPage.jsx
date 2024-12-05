import React from "react";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import python from "../../../public/images/python.png";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import advantages from '../../data/advantages';
import AdvantagesCourse from "../../components/advantagesCourse/AdvantagesCourse";
import Benefits from "../../components/benefits/Benefits";
import benefitsData from "../../data/benefits";
import pythonLogo from '../../../public/images/py2.png'


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
        image={pythonLogo}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        time="1,5 часа"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <AdvantagesCourse
        data={advantages}
        title="Преимущества курса" />
      <Benefits
        benefitsData={benefitsData}
        sectionTitle="Главные модули"
        highlightTitle="Анализ информации"
        additionalText="Машинное обучение"
      />
    </div>
  );
}

export default PythonPage;