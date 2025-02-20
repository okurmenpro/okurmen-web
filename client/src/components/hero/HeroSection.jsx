import React from "react";
import { Link } from "react-router-dom";
import cSharp from "../../../public/icons/cSharp.svg";
import react from "../../../public/icons/react-logo.svg";
import python from "../../../public/icons/python.svg";
import javascript from "../../../public/icons/javascript.svg";
import java from "../../../public/icons/java.svg";
import figma from "../../../public/icons/figma.svg";
import Button from "../button/Button";
import "./HeroSection.css";

const icons = [
  { src: cSharp, alt: "C#", className: "icon csharp", link: "/cSharp" },
  { src: javascript, alt: "JavaScript", className: "icon js", link: "/frontend" },
  { src: react, alt: "React", className: "icon react", link: "/frontend" },
  { src: python, alt: "Python", className: "icon python", link: "/python" },
  { src: figma, alt: "Figma", className: "icon figma", link: "/uxui" },
  { src: java, alt: "Java", className: "icon java", link: "/backend" },
];

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="font-bold text-4xl text-blue-900">ОКУРМЭН</h1>
        <p className="pt-7 pb-10 text-orange-600 text-lg font-medium p-2.5">Пошаговое обучение IT-навыкам с нуля до уверенного пользователя</p>
        <Button
          className="pb-2.5 border-2 text-base font-medium hero-button"
          ButtonText="Консультация"
          to="https://wa.me/+996705677798"
          target="_blank"
        />

        <div className="icons-container">
          {icons.map((icon, index) => (
            <Link key={index} to={icon.link} className={icon.className}>
              <img src={icon.src} alt={icon.alt}  />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
