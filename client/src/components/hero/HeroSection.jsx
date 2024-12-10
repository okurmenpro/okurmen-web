import React from "react";
import { Link } from "react-router-dom";
import cSharp from "../../../public/icons/cSharp.svg";
import typeScript from "../../../public/icons/typeScript.svg";
import python from "../../../public/icons/python.svg";
import javascript from "../../../public/icons/javascript.svg";
import java from "../../../public/icons/java.svg";
import figma from "../../../public/icons/figma.svg";
import Button from "../button/Button";

const icons = [
  {
    src: cSharp,
    alt: "C#",
    top: "0%",
    left: "20%",
    translateY: "-80%",
    link: "/backend",
  },
  {
    src: javascript,
    alt: "JavaScript",
    top: "10%",
    left: "30%",
    translateY: "-10%",
    link: "/frontend",
  },
  {
    src: typeScript,
    alt: "C++",
    top: "30%",
    left: "42%",
    translateY: "0%",
    link: "/frontend",
  },
  {
    src: python,
    alt: "Python",
    top: "31%",
    left: "57%",
    translateY: "0%",
    link: "/python",
  },
  {
    src: figma,
    alt: "Figma",
    top: "12%",
    left: "68%",
    translateY: "-19.5%",
    link: "/uxui",
  },
  {
    src: java,
    alt: "Java",
    top: "0%",
    left: "77%",
    translateY: "-86%",
    link: "/backend",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full h-auto bg-white ">
      <div className="text-center py-8 relative">
        <h1 className="text-blue-700 text-4xl font-bold">ОКУРМЭН</h1>
        <p className="text-orange-400 text-lg mt-2 mb-4">
          Пошаговое обучение IT-навыкам с нуля до уверенного пользователя
        </p>

        <Button
          className={`m-auto w-[150px] `}
          ButtonText="Консультация"
          to="/consultation"
        />

        <div className="relative mt-16 h-64 flex justify-center items-center">
          <div className="relative w-[80%] h-full flex justify-between items-center">
            {icons.map((icon, index) => (
              <Link
                key={index}
                to={icon.link}
                className="absolute h-16 w-16"
                style={{
                  top: icon.top,
                  left: icon.left,
                  transform: `translateY(${icon.translateY})`,
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-16 w-16 hover:scale-110 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
