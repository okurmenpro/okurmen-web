import React from "react";

const OkurmenPage = () => {
  return (
    <div className="w-full h-auto bg-white">
      {/* Header Section */}
      <div className="text-center py-8">
        <h1 className="text-blue-700 text-4xl font-bold">ОКУРМЭН</h1>
        <p className="text-orange-500 text-lg mt-2">
          Пошаговое обучение IT-навыкам с нуля до уверенного пользователя
        </p>
        <button className="mt-4 px-6 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition">
          Консультация
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center items-center gap-8 my-8">
        <img src="path-to-cpp-icon" alt="C++" className="h-16" />
        <img src="path-to-js-icon" alt="JS" className="h-16" />
        <img src="path-to-python-icon" alt="Python" className="h-16" />
        <img src="path-to-figma-icon" alt="Figma" className="h-16" />
        <img src="path-to-java-icon" alt="Java" className="h-16" />
      </div>

      {/* About Section */}
      <div className="px-8">
        <h2 className="text-orange-500 text-xl mb-4">О компании</h2>
        <p className="text-black text-lg leading-7">
          Учебный центр{" "}
          <span className="text-orange-500 font-bold">Окурмэн</span> был открыт
          в 2022 - году.
          <br />
          Учебный центр создан с целью обучения IT-специалистов, которые
          отвечают требованиям мировых компаний, ставят патриотов на землю
          служить родине в области IT.
          <br />В будущем, от детского сада до университета, воспитывать по
          кыргызские традиции и обычаи.
        </p>
      </div>

      {/* Founders Section */}
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-black text-xl font-bold">Основатели</h2>
        <div className="flex justify-center items-center gap-12 mt-4">
          <div className="flex flex-col items-center">
            <img
              src="path-to-founder1-image"
              alt="Улукбек Бактыбек"
              className="h-32 w-32 rounded-full bg-orange-200"
            />
            <p className="mt-2 text-center text-lg">Улукбек Бактыбек</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="path-to-founder2-image"
              alt="Санжар Мадумар"
              className="h-32 w-32 rounded-full bg-orange-200"
            />
            <p className="mt-2 text-center text-lg">Санжар Мадумар</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OkurmenPage;
