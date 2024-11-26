import React from "react";
import cSharp from "../../../public/icons/cSharp.svg";
import cPlus from "../../../public/icons/cPlus.svg";
import python from "../../../public/icons/python.svg";
import javascript from "../../../public/icons/javascript.svg";
import java from "../../../public/icons/java.svg";
import figma from "../../../public/icons/figma.svg";

const OkurmenPage = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="text-center py-8 relative">
        <h1 className="text-blue-700 text-4xl font-bold">ОКУРМЭН</h1>
        <p className="text-orange-400 text-lg mt-2">
          Пошаговое обучение IT-навыкам с нуля до уверенного пользователя
        </p>
        <button className="mt-4 px-6 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-500 hover:text-white transition">
          Консультация
        </button>
        <div className="relative mt-16 h-64 flex justify-center items-center">
          <div className="relative w-[80%] h-full flex justify-between items-center">
            <img
              src={cSharp}
              alt=""
              className="absolute h-16 w-16 top-0 left-[20%] transform translate-y-[-80%]"
            />
            <img
              src={javascript}
              alt="JavaScript"
              className="absolute h-16 w-16 top-[10%] left-[30%] transform translate-y-[-10%]"
            />
            <img
              src={cPlus}
              alt="Python"
              className="absolute h-16 w-16 top-[30%] left-[42%]"
            />
            <img
              src={python}
              alt="Figma"
              className="absolute h-16 w-16 top-[31%] left-[57%]"
            />
            <img
              src={figma}
              alt="Java"
              className="absolute h-16 w-16 top-[12%] left-[68%] transform translate-y-[-19.5%]"
            />
            <img
              src={java}
              alt="New Icon"
              className="absolute h-16 w-16 top-0 left-[77%] transform translate-y-[-86%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OkurmenPage;
