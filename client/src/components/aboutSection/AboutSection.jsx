import React from "react";
import ulukbek from "../../../public/images/ulukbek.png";
import sanjar from "../../../public/images/sanjar.png";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-white py-12 mt-[-20px] mx-auto w-[1440px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center sm:p-6 md:p-8">
          <AboutInfo t={t} />
          <AboutImages />
        </div>
      </div>
    </div>
  );
};

const AboutInfo = ({ t }) => (
  <div>
    <div className="flex justify-space-between items-center">
      <div className="h-[33.5px] w-[3px] bg-orange-400 mt-[-24px]"></div>
      <h2 className="text-black-400 text-xl font-bold mb-6 ml-[10px]">
        {t('aboutTitle')}
      </h2>
    </div>
    <p className="text-gray-700 text-lg mb-4 leading-relaxed font-bold">
      {t('aboutText1')}
    </p>
    <p className="mt-[20px] mb-[20px] text-gray-700 text-lg mb-4 leading-relaxed font-bold">
      {t('aboutText2')}
    </p>
    <p className="text-gray-700 text-lg leading-relaxed font-bold">
      {t('aboutText3')}
    </p>
  </div>
);

const AboutImages = () => (
  <div className="flex justify-center items-center ml-3 gap-4 sm:p-4 md:p-8">
    <div
      className="relative bg-orange-400 overflow-visible sm:p-4 md:p-8"
      style={{
        clipPath: "polygon(100% 15%, 100% 100%, 0 100%, 0% 0%)",
        width: "252px",
        height: "306px",
      }}
    >
      <img
        src={ulukbek}
        alt="Улукбек Бактыбек"
        className="absolute object-cover mx-auto w-1/2 mt-[33px] ml-[30px]"
        style={{ width: "176px", height: "283px", top: "-5px", left: "-10px" }}
      />
    </div>

    <div
      className="relative bg-orange-400 overflow-visible sm:p-4 md:p-8 mr-[15px]"
      style={{
        clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
        width: "252px",
        height: "306px",
      }}
    >
      <img
        src={sanjar}
        alt="Санжар Мадумар"
        className="absolute object-cover mx-auto w-1/2 sm:h-16 mt-[44px] ml-[25px]"
        style={{ width: "226px", height: "286px", top: "-5px", left: "-15px" }}
      />
    </div>
  </div>
);

export default AboutSection;
