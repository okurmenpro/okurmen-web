import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import Py2 from "../../../public/images/py2.png";
import Js2 from "../../../public/images/js2.png";
import Code from "../../../public/images/code.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import Button from "../button/Button";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Следующие потоки");

  const courses = {
    "Следующие потоки": [
      {
        title: "Frontend + Backend",
        description: "Срок обучения: 5 месяцев",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Js2,
      },
      {
        title: "Python",
        description: "Срок обучения: 2 месяца",
        extra: "+ английский язык",
        schedule: "4 раза в неделю",
        image: Py2,
      },
      {
        title: "React",
        description: "Срок обучения: 3 месяца",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Js2,
      },
      {
        title: "Data Science",
        description: "Срок обучения: 6 месяцев",
        extra: "+ английский язык",
        schedule: "2 раза в неделю",
        image: Py2,
      },
      {
        title: "Mobile Development",
        description: "Срок обучения: 4 месяца",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Js2,
      },
      {
        title: "Machine Learning",
        description: "Срок обучения: 5 месяцев",
        extra: "+ английский язык",
        schedule: "3 раза в неделю",
        image: Py2,
      },
    ],
    "Для детей": [
      {
        title: "Frontend + Backend",
        description: "Срок обучения: 1 месяц",
        extra: "",
        schedule: "2 раза в неделю",
        images: [Py2, Js2],
      },
    ],
    События: [
      {
        date: "22.11.24 в 15:00",
        address: "Турусбекова 109/1",
        image: Code,
      },
    ],
  };

  return (
    <div className="container p-8 ml-[73px]">
      <div className="mb-6">
        <span className="text-lg font-semibold text-gray-800 border-l-4 border-orange-500 pl-2">
          Курсы
        </span>
      </div>
      <div className="flex space-x-4 mb-8">
        {Object.keys(courses).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded font-medium ${
              activeTab === tab
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
              className="flex flex-row bg-black text-white rounded-lg overflow-hidden h-[350px] w-[1200px] shadow-xl"
            >
              <div className="w-1/2 h-full">
                <img
                  src={event.image}
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-between h-full text-left">
                <div className="flex flex-col mb-4 ml-[370px] mt-[130px]">
                  <p className="text-sm mb-2">
                    Начало: <span className="font-bold">{event.date}</span>
                  </p>
                  <p className="text-sm mb-4">
                    Адрес: <span className="font-bold">{event.address}</span>
                  </p>
                </div>
                1
                <div className="flex justify-end mt-auto">
                  <Button
                    className={
                      "bg-transparent border-2 border-orange-500 text-orange-500 py-2 px-6 rounded-lg text-lg font-medium hover:bg-orange-500 hover:text-white transition"
                    }
                    ButtonText="Консультация"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`flex ${
            activeTab === "Для детей"
              ? "justify-center"
              : "overflow-x-auto space-x-8"
          }`}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
            msOverflowStyle: "none",
          }}
        >
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className={`bg-gray-50 shadow-xl rounded-lg p-6 flex flex-row items-center space-x-6 ${
                activeTab === "Для детей" ? "w-[1200px]" : "w-[850px]"
              } h-[350px]`}
            >
              {activeTab === "Для детей" && course.images ? (
                <div className="flex space-x-4 w-1/2">
                  <img
                    src={course.images[0]}
                    alt="Python"
                    className="w-40 h-40 rounded-lg object-cover"
                  />
                  <img
                    src={course.images[1]}
                    alt="JavaScript"
                    className="w-40 h-40 rounded-lg object-cover"
                  />
                </div>
              ) : (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-40 h-40 rounded-lg object-cover"
                />
              )}
              <div className="flex flex-col space-y-4 text-gray-800 w-[600px]">
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <div className="flex items-center space-x-2">
                  <FaClock className="" />
                  <p className="text-lg">
                    {course.description}{" "}
                    <span className="text-orange-500">{course.extra}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-600">
                  <FaRegCalendarAlt className="bg-black-200" />
                  <span>{course.schedule}</span>
                </div>
                <div>
                  <button className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-orange-600">
                    Подробнее
                  </button>
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
