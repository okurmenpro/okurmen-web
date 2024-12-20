import React from "react";
import { Link } from "react-router-dom";
import cSharp from "../../../public/icons/cSharp.svg";
import react from "../../../public/icons/react.svg";
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
    link: "/cSharp",
  },
  {
    src: javascript,
    alt: "JavaScript",
    top: "10%",
    left: "30%",
    translateY: "-10%",
    link: "/frontend",
    mobileTranslateY: "-20%",
  },
  {
    src: react,
    alt: "react",
    top: "30%",
    left: "42%",
    translateY: "0%",
    link: "/frontend",
    mobileTranslateY: "-20%", // добавлен параметр для мобильных устройств
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
    <div className="w-full h-auto bg-white">
      <div className="text-center py-8 relative">
        <h1 className="text-blue-700 text-4xl font-bold">ОКУРМЭН</h1>
        <p className="text-orange-400 text-lg mt-2 mb-[50px]">
          Пошаговое обучение IT-навыкам с нуля до уверенного пользователя
        </p>

        <Button
          className={`m-auto w-[150px]`}
          ButtonText="Консультация"
          to="https://wa.me/+996705677798"
          target="_blank" // добавляем атрибут для открытия в новой вкладке
        />

        <div className="relative mt-16 h-64 flex justify-center items-center">
          <div className="relative w-[80%] h-full flex justify-between items-center">
            {icons.map((icon, index) => (
              <Link
                key={index}
                to={icon.link}
                className="absolute"
                style={{
                  top: icon.top,
                  left: icon.left,
                  transform: `translateY(${icon.translateY})`,
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className={`${
                    icon.alt === "react" ? "h-[80px] w-[80px]" : "h-16 w-16"
                  } hover:scale-110 transition-transform duration-300`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .relative.mt-16.h-64 {
            height: auto;
            flex-direction: column;
          }
          .relative.w-[80%] {
            width: 100%;
            flex-wrap: wrap;
          }
          .absolute {
            position: static;
            margin: 10px;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2xl;
          }
          p {
            font-size: base;
          }
          .relative.mt-16.h-64 {
            height: auto;
            flex-direction: column;
          }
          .relative.w-[80%] {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
          .absolute {
            position: static;
            margin: 10px;
          }

          .absolute:nth-child(2) {
            transform: translateY(-25%) !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: xl;
          }
          p {
            font-size: sm;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
