import React, { useState } from "react";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import Py2 from "../../../public/images/py2.png";
import Js2 from "../../../public/images/js2.png";
import front_back from "../../../public/images/image.png";
import Code from "../../../public/images/code.png";
import Button from "../button/Button";
import sharp from "../../../public/icons/sharp.svg";
import figma from "../../../public/images/figmalogo.png";
import java from "../../../public/images/java2.png";
import { Link } from "react-router-dom";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Следующие потоки");

  const courses = {
    "Следующие потоки": [
      { title: "Frontend + Backend", description: "Срок обучения: 5 месяцев", extra: "+ английский язык", schedule: "3 раза в неделю", image: front_back, link: "frontendBackend" },
      { title: "Python", description: "Срок обучения: 2 месяца", extra: "+ английский язык", schedule: "4 раза в неделю", image: Py2, link: "python" },
      { title: "Frontend", description: "Срок обучения: 3 месяца", extra: "+ английский язык", schedule: "3 раза в неделю", image: Js2, link: "FrontendPage" },
      { title: "C#", description: "Срок обучения: 6 месяцев", extra: "+ английский язык", schedule: "2 раза в неделю", image: sharp, link: "csharp" },
      { title: "Java", description: "Срок обучения: 4 месяца", extra: "+ английский язык", schedule: "3 раза в неделю", image: java, link: "backend" },
      { title: "UX/UI design", description: "Срок обучения: 5 месяцев", extra: "+ английский язык", schedule: "3 раза в неделю", image: figma, link: "uxui" },
    ],
    "Для детей": [
      { title: "Frontend + Backend", description: "Срок обучения: 5 месяцев", extra: "+ английский язык", schedule: "3 раза в неделю", image: front_back, link: "frontendBackend" },
    ],
    События: [
      { name: "Frontend разработке", date: "05.05.25 в 15:00", address: "Турусбекова 109/1", image: Code },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
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
            className={`py-2 px-4 rounded font-medium whitespace-nowrap text-sm ${activeTab === tab ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
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
                <img src={event.image} alt="Event" className="w-full h-full object-cover" />
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
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-8">
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 flex flex-col items-center justify-between space-y-4 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.15)] bg-white min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] h-[350px] sm:h-[380px] mb-6"
            >
              <img
                src={course.image}
                alt={course.title}
                className={`${course.title === "UX/UI design" ? "h-[115px]" :
                    course.title === "Java" ? "h-[119px]" :
                    course.title === "C#" ? "h-[119px]" :
                      "w-[100px] sm:w-[150px] lg:w-[120px]"
                  } h-auto object-contain rounded-lg`}
              />

              <h3 className="text-lg sm:text-2xl font-bold text-center">
                {course.title}
              </h3>
              <div className="flex items-center space-x-2">
                <FaClock className=" sm:relative sm:top-0 top-[-2px]" />
                <p className="text-sm sm:text-lg">
                  {course.description} <span className="text-orange-500">{course.extra}</span>
                </p>
              </div>
              <div className="flex items-center text-gray-600 text-sm sm:text-lg">
                <FaRegCalendarAlt />
                <span className="ml-2">{course.schedule}</span>
              </div>
              <Link to={course.link} className="mt-auto">
                <Button ButtonText="Подробнее" color="orange" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
