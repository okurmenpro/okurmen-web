import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="container mx-auto">
        {/* Логотип */}
        <div className="flex justify-center md:justify-start mb-8">
          <img
            src="/icons/okurmenlogo.svg"
            alt="Okurmen Logo"
            className="w-32"
          />
        </div>
        <hr className="border-white-300 my-6" />

        {/* Контент */}
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left border-b border-white pb-6">
          {/* Главная */}
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
          {/* Контакты */}
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">Контакты</h2>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <IoLogoWhatsapp className="mr-2" /> +996705677798
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <IoLogoInstagram className="mr-2" /> okurmen_it
            </p>
          </div>
          {/* Адрес */}
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">Наш адрес</h2>
            <p>Турусбекова 109/1</p>
          </div>
          {/* Другие ресурсы */}
          <div>
            <h2 className="font-bold mb-6 text-xl md:text-2xl">
              Другие ресурсы
            </h2>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <IoLogoInstagram className="mr-2" /> okurmen.jobs
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <IoLogoInstagram className="mr-2" /> okurmen_kids
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <IoLogoInstagram className="mr-2" /> okurmen.studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
