
import React from "react";
import Java from "../../../public/images/java.png";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import Backendpage2 from "../../components/backendpage2/Backendpage2";
import ModulsBackend from "../../components/modulsBackend/ModulsBackend";

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
      <Backendpage2 />
      <ModulsBackend />
    </div>
  );
};

export default BackendPage;