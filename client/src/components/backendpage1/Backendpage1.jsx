import React from "react";
import Java from "../../../public/images/java.png";
import { NavLink } from "react-router-dom";

const Backendpage1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6  rounded-lg ">
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-2">
          Backend
        </h2>
        <p className="text-gray-700 mb-4 my-6 font-medium text-xl">
          Бэкенд — это та часть любого веб-сайта или приложения, которую не
          видит пользователь, но которая обеспечивает его работу. Если
          представить сайт как ресторан, то бэкенд — это кухня, где повара
          готовят еду, а интерфейс, который видит пользователь (фронтенд) — это
          обеденный зал, где подают блюда.
        </p>
        <NavLink to={"/consultation"}>
          <button className="text-orange-500 border border-orange-500 font-semibold py-2 px-4 rounded">
            Консультация
          </button>
        </NavLink>
      </div>
      <div className="order-last md:order-none md:w-1/2 flex justify-center p-4 hidden md:flex">
        <img src={Java} alt="Java logo" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Backendpage1;
