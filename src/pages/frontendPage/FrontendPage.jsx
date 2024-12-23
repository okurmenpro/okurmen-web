import React from 'react'
import AboutCourse from '../../components/aboutCourse/aboutCourse';
import FrontendIcons from '../../../public/icons/FrontentIcons.svg'
import PriseCourse from '../../components/priceCourse/PriceCourse';
import AdvantagesCourse from '../../components/advantagesCourse/AdvantagesCourse';
import advantagesFront from '../../data/advantagesFrontend';
import MainModules from '../../components/mainModules/MainModules';
import frontmodules from '../../data/frontmodules';
import javascript from '../../../public/icons/javascript.svg'


function FrontendPage() {
  const frontendDescription = `
  Основные задачи фронтенд-разработчика — создать и настроить интерфейс, чтобы он был красивым, удобным и работал на всех устройствах. 
  Для этого используют языки программирования HTML , CSS и JavaScript.
`;
  return (
    <div>
      <AboutCourse
        title="Frontend"
        description={frontendDescription}
        image={FrontendIcons}
        imageAlt="Frontend icons"
      />
      <PriseCourse
        title="Frontend"
        image={javascript}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        time="1,5 часа"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <AdvantagesCourse
        data={advantagesFront}
        title="Преимущества курса" />
      <MainModules
        data={frontmodules}
        title="Главные модули" />

    </div>
  )
}

export default FrontendPage