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
    <div className="container ml-[73px]">
      {/* Header */}
      <div className="mb-6">
        <span className="text-lg font-semibold text-gray-800 border-l-4 border-orange-500 pl-2">
          Курсы
        </span>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        {Object.keys(courses).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded font-medium whitespace-nowrap text-sm ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Events Tab */}
      {activeTab === "События" ? (
        <div className="flex justify-center">
          {courses["События"].map((event, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-black text-white rounded-lg overflow-hidden shadow-xl w-full lg:w-[1200px] h-auto lg:h-[350px]"
            >
              <div className="w-full lg:w-1/2 h-[200px] lg:h-full">
                <img
                  src={event.image}
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between text-right">
                <div className="mb-6">
                  <p className="text-sm mb-2">
                    Начало: <span className="font-bold">{event.date}</span>
                  </p>
                  <p className="text-sm">
                    Адрес: <span className="font-bold">{event.address}</span>
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button
                    className="bg-transparent border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition"
                    ButtonText="Консультация"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Other Tabs Content
        <div
          className="flex space-x-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          style={{ overflowY: "hidden" }}
        >
          {courses[activeTab].map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-xl rounded-lg p-6 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 min-w-[350px] sm:min-w-[500px] lg:min-w-[750px] h-auto sm:h-[350px]"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover"
              />

              {/* Content */}
              <div className="flex flex-col space-y-4 w-full">
                <h3 className="text-lg sm:text-2xl font-bold text-center sm:text-left">
                  {course.title}
                </h3>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <FaClock />
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
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-orange-600 transition">
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
