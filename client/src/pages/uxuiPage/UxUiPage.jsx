import React from "react";
import figmalogo from "../../../public/images/figmalogo.png";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from '../../components/advantagesCourse/AdvantagesCourse';
import advantages from '../../data/advantages';

const UxUiPage = () => {
  const UxUiDescription = `
   UX/UI дизайн — это процесс создания удобных и привлекательных интерфейсов для пользователей. Проще говоря, UI — это
            "картинка", а UX — это то, как всё работает для удобства
            пользователя. Вместе они помогают создать интуитивные и
            удобные приложения или сайты, которыми приятно и легко пользоваться.
  `
  return (
    <>
      <AboutCourse
        title="UX/UI"
        description={UxUiDescription}
        image={figmalogo}
        imageAlt="Python logo"

      />
      <PriseCourse
        title="UX/UI design"
        // image={figmaLogo}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <AdvantagesCourse
        data={advantages}
        title="Преимущества курса" />
    </>
  );
};

export default UxUiPage;