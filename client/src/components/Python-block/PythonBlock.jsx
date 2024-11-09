import React from "react";
import python from "../../../public/images/pyhtonLogo.png";

function PythonBlock() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg p-6  flex items-start border border-orange-200">
        <img src={python} alt="figma logo" className="w-60 h-60 mr-6" />
        <div className="w-[800px] h-[260px]">
          <h2 className="text-2xl font-bold mb-2">UX/UI design</h2>
          <p className=" mb-4">
            Срок обучения: 2 месяца •{" "}
            <span className="text-orange-500">английский язык</span>
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              {/* <IoTime className="w-5 h-5 mr-2" />4 раза в неделю */}
            </div>
            <div className="flex items-center w-[270px]  rounded-lg pl-2  text-gray-600 border border-orange-500">
              {/* <RxCalendar className="w-5 h-5 mr-2" /> */}
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
  );
}

export default PythonBlock;
