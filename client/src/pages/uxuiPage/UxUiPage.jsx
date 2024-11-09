import React from "react";
import Header from "../../components/header/Header";
import figmalogo from "../../../public/images/figmalogo.png";
import figma from "../../../public/images/figma.png";
import { IoTime } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
const UxUiPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-around container">
        <div className="mr-10">
          <strong className="font-bold text-6xl text-blue-700 ">
            UX/UI design
          </strong>
          <p className="w-[632px] h-[216px] md:w-[100%] md:h-auto pt-10 text-zinc-950 font-medium text-xl">
            UX/UI дизайн — это процесс создания удобных и <br /> привлекательных
            интерфейсов для пользователей. <br /> Проще говоря, UI — это
            "картинка", а UX — это то, как всё <br /> работает для удобства
            пользователя. Вместе они помогают <br /> создать интуитивные и
            удобные приложения или сайты, <br />
            которыми приятно и легко пользоваться.
          </p>
          <button className="mt-10 text-amber-500 border-2 border-orange-500 rounded-lg text-center pt-1 pb-1 pl-4 pr-4 font-medium text-xl">
            Консультация
          </button>
        </div>
        <div>
          <img
            className="w-[250px] h-[370px] mt-10"
            src={figmalogo}
            alt="Figma Logo"
          />
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg p-6  flex items-start border border-orange-200">
        
        <img src={figma} alt="figma logo" className="w-60 h-60 mr-6" />
        <div className="w-[800px] h-[260px]">
          <h2 className="text-2xl font-bold mb-2">UX/UI design</h2>
          <p className=" mb-4">
            Срок обучения: 2 месяца •{" "}
            <span className="text-orange-500">английский язык</span>
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <IoTime className="w-5 h-5 mr-2" />4 раза в неделю
            </div>
            <div className="flex items-center w-[270px]  rounded-lg pl-2  text-gray-600 border border-orange-500">
              <RxCalendar 
                className="w-5 h-5 mr-2"
              />
              Начнётся:{" "}
              <span className="text-orange-500 ml-1">12 ноября, 2024 год</span>
            </div>
          </div>

          <div className="text-gray-600 mb-4">
            <p>Дополнительно:</p>
            <ul className="list-disc list-inside ml-4">
              <li>IT клуб</li>
              <li>Английский язык</li>
            </ul>
          </div>

          <div className="text-right text-lg font-semibold text-gray-800">
            Сумма обучения: <span className="text-black">15 000 сом</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UxUiPage;
