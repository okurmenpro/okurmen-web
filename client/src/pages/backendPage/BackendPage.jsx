
import React from "react";
import Java from "../../../public/images/java.png";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import Backendpage2 from "../../components/backendpage2/Backendpage2";
import ModulsBackend from "../../components/modulsBackend/ModulsBackend";
import PriseCourse from "../../components/priceCourse/PriceCourse";

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
        // image={javaLogo}
        duration="2 месяца"
        englishIncluded={true}
        frequency="4 раза в неделю"
        startDate="12 ноября, 2024 год"
        additional={["IT клуб", "Английский язык"]}
        price="15 000 сом"
      />
      <ModulsBackend />
    </div>
  );
};

export default BackendPage;