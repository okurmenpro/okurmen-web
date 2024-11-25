import React from "react";
import UxUiBlock from "../../components/uxuiBlock/UxUiBlock";
import figmalogo from "../../../public/images/figmalogo.png";
import CourseAdvantages from "../../components/advantagesPython/AdvantagesPython";
import MainModules from "../../components/mainModules/MainModules";
import AboutCourse from "../../components/aboutCourse/aboutCourse";

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
      <UxUiBlock />
      <CourseAdvantages />
      <MainModules />
    </>
  );
};

export default UxUiPage;
