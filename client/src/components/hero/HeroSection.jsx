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
import { useTranslation } from "react-i18next";

const icons = [
  { src: cSharp, alt: "C#", className: "icon csharp", link: "/cSharp" },
  { src: javascript, alt: "JavaScript", className: "icon js", link: "/frontend" },
  { src: react, alt: "React", className: "icon react", link: "/frontend" },
  { src: python, alt: "Python", className: "icon python", link: "/python" },
  { src: figma, alt: "Figma", className: "icon figma", link: "/uxui" },
  { src: java, alt: "Java", className: "icon java", link: "/backend" },
];

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="font-bold text-5xl md:text-6xl text-blue-900">
          {t('logo')} 
        </h1>
        <p className="pt-5 pb-8 text-orange-400 font-semibold text-center p-2.5 max-w-xs !sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          {t('heroText')} 
        </p>

        <Button
          className="pb-2.5 border-2 text-base font-medium hero-button"
          ButtonText={t('consultation')}  
          to="https://wa.me/+996705677798"
          target="_blank"
        />

        <div className="icons-container">
          {icons.map((icon, index) => (
            <Link key={index} to={icon.link} className={icon.className}>
              <img src={icon.src} alt={icon.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
