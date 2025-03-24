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
import { useTranslation } from "react-i18next";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Следующие потоки");
  const { t } = useTranslation();

  const courses = {
    "Следующие потоки": [
      { title: "Frontend + Backend", description: t('frontendDescription'), extra: t('extraLang'), schedule: 3, image: front_back, link: "frontendBackend" },
      { title: "Python", description: t('pythonDescription'), extra: t('extraLang'), schedule: 4, image: Py2, link: "python" },
      { title: "Frontend", description: t('frontendDescription'), extra: t('extraLang'), schedule: 3, image: Js2, link: "FrontendPage" },
      { title: "C#", description: t('csharpDescription'), extra: t('extraLang'), schedule: 2, image: sharp, link: "csharp" },
      { title: "Java", description: t('javaDescription'), extra: t('extraLang'), schedule: 3, image: java, link: "backend" },
      { title: "UX/UI design", description: t('uxuiDescription'), extra: t('extraLang'), schedule: 3, image: figma, link: "uxui" },
    ],
    "Для детей": [
      { title: t('frontend'), description: t('frontendDescription'), extra: t('extraLang'), schedule: 3, image: front_back, link: "frontendBackend" },
    ],
    События: [
      { 
        name: t('trialLesson') + " Frontend разработке", 
        date: "05.05.25 в 15:00", 
        address: "Турусбекова 109/1", 
        image: Code 
      },
    ],
  };

  const translatedSchedule = (schedule) => {
    return t('perWeek', { count: schedule }); 
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

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-8">
        {courses[activeTab].map((course, index) => {
          if (activeTab === "События") {
            return (
              <div key={index} className="rounded-2xl p-6 flex flex-col items-center justify-between space-y-4 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.15)] bg-white min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] h-[350px] sm:h-[380px] mb-6">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-[100px] sm:w-[150px] lg:w-[120px] rounded-lg"
                />
                <h3 className="text-lg sm:text-2xl font-bold text-center">{course.name}</h3>
                <div className="flex items-start space-x-2">
                  <FaClock className="relative sm:top-1.5 top-[3.5px]" />
                  <p className="text-sm sm:text-lg">
                    {course.date}
                  </p>
                </div>

                <div className="flex items-center text-gray-600 text-sm sm:text-lg">
                  <FaRegCalendarAlt />
                  <span className="ml-2">
                    {course.address}
                  </span>
                </div>
                <Link to="#" className="mt-auto">
                  <Button ButtonText={t('moreDetails')} color="orange" />
                </Link>
              </div>
            );
          }

          return (
            <div key={index} className="rounded-2xl p-6 flex flex-col items-center justify-between space-y-4 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.15)] bg-white min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] h-[350px] sm:h-[380px] mb-6">
              <img
                src={course.image}
                alt={course.title}
                className={`${course.title === "UX/UI design" ? "h-[125px]" : course.title === "Java" ? "h-[125px]" : course.title === "C#" ? "h-[125px]" : "w-[100px] sm:w-[150px] lg:w-[120px]"} rounded-lg`}
              />
              <h3 className="text-lg sm:text-2xl font-bold text-center">{course.title}</h3>
              <div className="flex items-start space-x-2">
                <FaClock className="relative sm:top-1.5 top-[3.5px]" />
                <p className="text-sm sm:text-lg">
                  {course.description} <span className="text-orange-500">{course.extra}</span>
                </p>
              </div>

              <div className="flex items-center text-gray-600 text-sm sm:text-lg">
                <FaRegCalendarAlt />
                <span className="ml-2">
                  {translatedSchedule(course.schedule)} 
                </span>
              </div>
              <Link to={course.link} className="mt-auto">
                <Button ButtonText={t('moreDetails')} color="orange" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
