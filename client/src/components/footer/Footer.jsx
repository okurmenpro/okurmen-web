import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-start mb-8">
          <img
            src="/icons/okurmenlogo.svg"
            alt="Okurmen Logo"
            className="w-32"
          />
        </div>
        <hr className="border-white-300 my-6" />
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left border-b border-white pb-6">
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">Главная</h2>
            <ul>
              <li className="mb-2 cursor-pointer hover:underline">
                О компании
              </li>
              <li className="mb-2 cursor-pointer hover:underline">Курсы</li>
              <li className="mb-2 cursor-pointer hover:underline">
                Стажировка
              </li>
              <li className="cursor-pointer hover:underline">IT club</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">Контакты</h2>
            <a href="https://wa.me/996705677798" 
                      target="_blank" 
             className="mb-2 flex items-center justify-center md:justify-start cursor-pointer">
              <IoLogoWhatsapp className="mr-2" /> +996705677798
            </a>
            <a
            href="https://www.instagram.com/okurmen_it/"
            target="_blank"
            className="flex items-center justify-center md:justify-start">
              <IoLogoInstagram className="mr-2" /> okurmen_it
            </a>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">Наш адрес</h2>
            <a 
            target="_blank"
            href="https://2gis.kg/bishkek/inside/70030076155378888/firm/70000001075854813?m=74.585266%2C42.878822%2F17.27">Турусбекова 109/1</a>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">
              Другие ресурсы
            </h2>
            <a href="https://www.instagram.com/okurmen.jobs/"
            target="_blank"
            className="mb-2 flex items-center justify-center md:justify-start cursor-pointer">
              <IoLogoInstagram className="mr-2" /> okurmen.jobs
            </a>
            <a href="https://www.instagram.com/okurmen_kids/"
            target="_blank"
            className="mb-2 flex items-center justify-center md:justify-start cursor-pointer">
              <IoLogoInstagram className="mr-2" /> okurmen_kids
            </a>
            <a href="https://www.instagram.com/okurmen.studio/" 
            target="_blank"
            className="flex items-center justify-center md:justify-start cursor-pointer">
              <IoLogoInstagram className="mr-2" /> okurmen.studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
