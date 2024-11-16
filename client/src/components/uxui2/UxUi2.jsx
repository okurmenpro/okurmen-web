import React from "react";
import figma from "../../../public/images/figma.png";
import time from "../../../public/icons/time.svg";
import calendar from "../../../public/icons/calendar.svg";
const UxUi2 = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen mb-40">
        <div className="bg-white rounded-lg p-6  flex items-start border border-orange-200 ">
          <img src={figma} alt="figma logo" className="w-60 h-63 mr-6" />
          <div className="w-[800px] h-[260px]">
            <h2 className="text-2xl font-bold mb-2">UX/UI design</h2>
            <p className="flex mb-4">
            <img src={time} className="w-5 h-5 mr-2" />Срок обучения: 2 месяца •{" "}
              <span className="text-orange-500">английский язык</span>
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-black-600">
              <img src={calendar} className="w-5 h-5 mr-2" />4 раза в неделю
              </div>
              <div className="flex items-center w-[270px]  rounded-full pl-2  text-black-600 border border-orange-500">
                
                Начнётся:{" "}
                <span className="text-orange-500 ml-1">
                  12 ноября, 2024 год
                </span>
              </div>
            </div>

            <div className="text-black-600 mb-4">
              <p>Дополнительно:</p>
              <ul className="list-disc list-inside ml-4">
                <li>IT клуб</li>
                <li>Английский язык</li>
              </ul>
            </div>

            <div className="text-right text-lg font-semibold text-black-800">
              Сумма обучения: <span className="text-black">15 000 сом</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UxUi2;
