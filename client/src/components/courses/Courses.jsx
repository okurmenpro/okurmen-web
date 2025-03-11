import React, { useState } from "react";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import Py2 from "../../../public/images/py2.png";
import Js2 from "../../../public/images/js2.png";
import front_back from "../../../public/images/image.png";
import Code from "../../../public/images/code.png";
import Button from "../button/Button";
import sharp from "../../../public/icons/sharp.svg";
import { Link } from "react-router-dom";
import BackendFrontend from "../../pages/backendFrontend/BackendFrontend";
import BackendPage from "../../pages/backendPage/BackendPage";
import PythonPage from "../../pages/pythonPage/PythonPage";
import FrontendPage from "../../pages/frontendPage/FrontendPage";
import CSharp from "../../pages/c_Sharp/CSharp";
import UxUiPage from "../../pages/uxuiPage/UxUiPage";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Следующие потоки");

  const courses = {
    "Следующие потоки": [
      {
        title: "Frontend + Backend",
        description: "Срок обучения: 5 месяцев",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        link: "frontendBackend",
      },
      {
        title: "Python",
        description: "Срок обучения: 2 месяца",
        extra: "+ английский язык",
        schedule: "4 раза в неделю",
        image: Py2,
        link: "python"
      },
      {
        title: "Frontend",
        description: "Срок обучения: 3 месяца",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Js2,
        link: "FrontendPage"
      },
      {
        title: "C#",
        description: "Срок обучения: 6 месяцев",
        extra: "+ английский язык",
        schedule: "2 раза в неделю",
        image: sharp,
        link: "csharp"
      },
      {
        title: "Java",
        description: "Срок обучения: 4 месяца",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Js2,
        link: "backend"
      },
      {
        title: "UX/UI design",
        description: "Срок обучения: 5 месяцев",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Py2,
        link: "uxui"
      },
    ],
    "Для детей": [
      {
        title: "Frontend + Backend",
        description: "Срок обучения: 5 месяцев",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: front_back,
      },
    ],
    События: [
      {
        name: "Frontend разработке",
        date: "05.05.25 в 15:00",
        address: "Турусбекова 109/1",
        image: Code,
      },
    ],
  };

  return (
    <div className="container ml-[73px] px-4 sm:px-8 md:px-16">
      <div className="mb-6">
        <span className="text-lg font-semibold text-gray-800 border-l-4 border-orange-500 pl-2">
          Курсы
        </span>
      </div>

      <div className="flex scrollbar-hide space-x-4 mb-8 overflow-x-auto">
        {Object.keys(courses).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded font-medium whitespace-nowrap text-sm ${activeTab === tab
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "События" ? (
        <div className="flex justify-center">
          {courses["События"].map((event, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-black text-white rounded-lg overflow-hidden shadow-xl w-full lg:w-[1200px] h-auto lg:h-[350px] mb-8"
            >
              <div className="w-full lg:w-1/2 h-[200px] lg:h-full">
                <img
                  src={event.image}
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between text-right">
                <div className="mb-6 font-bold">
                  <h1 className="text-white pt-5 pb-14 font-medium text-3xl">
                    Пробный урок по{" "}
                    <span className=" text-orange-600">{event.name}</span>
                  </h1>
                  <div className="text-sm mb-2 text-[18px]">
                    <p>
                      Начало: <span>{event.date}</span>
                    </p>
                    <Link to={'/location'}>
                      <p className="cursor-pointer">
                        Адрес: <span>{event.address}</span>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button ButtonText="Консультация" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide mb-8">
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 min-w-[350px] sm:min-w-[500px] lg:min-w-[750px] h-auto sm:h-[350px] shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.15)]"
            >
              <div className="relative">
                {/* Рендерим основное изображение только если это не первая карточка 
          и если у карточки есть image */}
                {!(index === 0 && course.title === "Frontend + Backend") && course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-32 sm:w-40 aspect-square rounded-lg object-cover"
                  />
                )}

                {/* Для карточек с названием "Frontend + Backend" выводим оверлей с двумя фото */}
                {course.title === "Frontend + Backend" && (
                  <div className="flex flex-wrap sm:flex-none">
                    <img
                      src={Js2}
                      alt="JavaScript"
                      className="w-16 sm:w-[100px] aspect-square object-cover sm:absolute sm:bottom-[15px] sm:left-[-10px]"
                    />
                    <img
                      src={Py2}
                      alt="Python"
                      className="w-16 sm:w-[100px] aspect-square object-cover sm:absolute sm:top-[15px] sm:right-[1px]"
                    />
                  </div>
                )}
              </div>

              {/* Остальное содержимое карточки */}
              <div className="flex flex-col space-y-4 w-full">
                <h3 className="text-lg sm:text-2xl font-bold text-center sm:text-left">
                  {course.title}
                </h3>
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <FaClock className="sm:mt-1.5 mt-0.5" />
                  <p className="text-sm sm:text-lg">
                    {course.description}{" "}
                    <span className="text-orange-500">{course.extra}</span>
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600 text-sm sm:text-lg">
                  <FaRegCalendarAlt />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex justify-center sm:justify-start mt-2 sm:mt-auto">
                  <Link to={course.link}>
                    <Button ButtonText="Подробнее" color="orange" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Courses;
