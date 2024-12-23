import React from "react";
import Java from "../../../public/images/java.png";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from "../../components/advantagesCourse/AdvantagesCourse";
import advantagesBackend from '../../data/advantagesBackend'
import Benefits from "../../components/benefits/Benefits";
import benefitsData from "../../data/benefits";
import backend from '../../../public/icons/backend.svg'

const BackendPage = () => {
  const backendDescription = `
  Бэкенд — это та часть любого веб-сайта или приложения, которую не
          видит пользователь, но которая обеспечивает его работу. Если
          представить сайт как ресторан, то бэкенд — это кухня, где повара
          готовят еду, а интерфейс, который видит пользователь (фронтенд) — это
          обеденный зал, где подают блюда.`
  return (
    <div>
      <AboutCourse
        title="Backend"
        description={backendDescription}
        image={Java}
        imageAlt="Backend logo"
      />
      <PriseCourse
        title="Backend"
        image={backend}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        time="1,5 часа"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <AdvantagesCourse
        data={advantagesBackend}
        title="Преимущества курса" />
      <Benefits
        benefitsData={benefitsData}
        sectionTitle="Главные модули"
        highlightTitle="Анализ информации"
        additionalText="Машинное обучение"
      />

    </div>
  );
};

export default BackendPage;