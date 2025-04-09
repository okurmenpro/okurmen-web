import React from "react";
import figmalogo from "../../../public/images/figmalogo.png";
import figma from '../../../public/images/figma.png'
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from '../../components/advantagesCourse/AdvantagesCourse';
import advantages from '../../data/advantages';
import modules from "../../data/modules";
import MainModules from "../../components/mainModules/MainModules";
import { useTranslation } from "react-i18next";
const UxUiPage = () => {
   const { t } = useTranslation();
  const UxUiDescription = t ('description_figma_course')
  return (
    <>
      <AboutCourse
        title="UX/UI design"
        description={UxUiDescription}
        image={figmalogo}
        imageAlt="Python logo"

      />
      <PriseCourse
        title="UX/UI design"
        image={figma}
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
      <MainModules
        data={modules}
        title="Главные модули" />
    </>
  );
};

export default UxUiPage;