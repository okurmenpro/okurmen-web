import React from "react";
import cSharp from "../../../public/icons/cSharp.svg";
import cPlus from "../../../public/icons/cPlus.svg";
import python from "../../../public/icons/python.svg";
import javascript from "../../../public/icons/javascript.svg";
import java from "../../../public/icons/java.svg";
import figma from "../../../public/icons/figma.svg";
import { Link } from "react-router-dom";

const icons = [
  { src: cSharp, alt: "C#", top: "0%", left: "20%", translateY: "-80%" },
  {
    src: javascript,
    alt: "JavaScript",
    top: "10%",
    left: "30%",
    translateY: "-10%",
  },
  { src: cPlus, alt: "C++", top: "30%", left: "42%", translateY: "0%" },
  { src: python, alt: "Python", top: "31%", left: "57%", translateY: "0%" },
  { src: figma, alt: "Figma", top: "12%", left: "68%", translateY: "-19.5%" },
  { src: java, alt: "Java", top: "0%", left: "77%", translateY: "-86%" },
];

const HeroSection = () => {
  return (
    <div className="w-full h-auto bg-white mt-[100px]">
      <div className="text-center py-8 relative">
        <h1 className="text-blue-700 text-4xl font-bold">ОКУРМЭН</h1>
        <p className="text-orange-400 text-lg mt-2">
          Пошаговое обучение IT-навыкам с нуля до уверенного пользователя
        </p>
        <Link to="/consultation">
          <button className="mt-4 px-6 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-500 hover:text-white transition">
            Консультация
          </button>
        </Link>
        <div className="relative mt-16 h-64 flex justify-center items-center">
          <div className="relative w-[80%] h-full flex justify-between items-center">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="absolute h-16 w-16"
                style={{
                  top: icon.top,
                  left: icon.left,
                  transform: `translateY(${icon.translateY})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
