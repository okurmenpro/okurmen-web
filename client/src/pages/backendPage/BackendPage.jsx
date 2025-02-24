import React from "react";
import Java from "../../../public/images/java.png";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from "../../components/advantagesCourse/AdvantagesCourse";
import advantagesBackend from '../../data/advantagesBackend'
import backend from '../../../public/icons/backend.svg'
import MainModules from "../../components/mainModules/MainModules";
import javaModules from '../../data/javaModules'
const BackendPage = () => {
  const backendDescription = `
 Java — это язык программирования, который используется для создания программ и приложений. Он очень популярен и может работать на разных устройствах, таких как компьютеры, телефоны и серверы.
 
 Java устроен так, чтобы код было легко поддерживать и обновлять. Это помогает, если нужно изменить программу или исправить ошибки.`
  return (
    <div>
      <AboutCourse
        title="Java - Backend"
        description={backendDescription}
        image={Java}
        imageAlt="Backend logo"
      />
      <PriseCourse
        title="Java"
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
      <MainModules
        data={javaModules}
        title="Главные модули"
      />

    </div>
  );
};

export default BackendPage;