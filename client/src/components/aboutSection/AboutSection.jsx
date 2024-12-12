import React from "react";
import ulukbek from "../../../public/images/ulukbek.png";
import sanjar from "../../../public/images/sanjar.png";

const AboutSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 mt-[-20px] mx-auto w-[1440px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutInfo />
          <AboutImages />
        </div>
      </div>
    </div>
  );
};

const AboutInfo = () => (
  <div>
    <div className="descriptionOkurmen flex justify-space-between items-center">
      <div className="h-[33.5px] w-[3px] bg-orange-400 mt-[-24px]"></div>
      <h2 className="text-black-400 text-xl font-bold mb-6 ml-[10px]">
        О компании
      </h2>
    </div>
    <p className="text-gray-700 text-lg mb-4 leading-relaxed font-bold">
      Учебный центр <span className="text-orange-400 font-bold">Окурмэн</span>{" "}
      был открыт в 2022 году
    </p>
    <p className="mt-[20px] mb-[20px] text-gray-700 text-lg mb-4 leading-relaxed font-bold">
      Учебный центр <span className="text-orange-400 font-bold">Окурмэн</span>{" "}
      был открыт с целью обучения IT-специалистов, которые отвечают требованиям
      мировых компаний, ставят патриотов на землю служить родине в области IT.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed font-bold">
      В будущем, от детского сада до университета, воспитывать по кыргызские
      традиции и обычаи.
    </p>
  </div>
);

const AboutImages = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    <div
      className="relative bg-orange-400 overflow-visible"
      style={{
        clipPath: "polygon(100% 15%, 100% 100%, 0 100%, 0% 0%)",
        width: "252px",
        height: "306px",
      }}
    >
      <img
        src={ulukbek}
        alt="Улукбек Бактыбек"
        className="absolute object-cover mx-auto w-1/2 mt-[33px] ml-[50px]"
        style={{ width: "176px", height: "283px", top: "-10px", left: "-10px" }}
      />
    </div>

    <div
      className="relative bg-orange-400 overflow-visible"
      style={{
        clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
        width: "252px",
        height: "306px",
      }}
    >
      <img
        src={sanjar}
        alt="Санжар Мадумар"
        className="absolute object-cover mx-auto w-1/2 mt-[44px] ml-[25px]"
        style={{ width: "226px", height: "286px", top: "-15px", left: "-15px" }}
      />
    </div>
  </div>
);

export default AboutSection;
