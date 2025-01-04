import React, { useState, useEffect, useRef } from "react";
import okurmen from "../../../public/images/logo.png";
import greet from "../../../public/images/hands.png";
import KyrgyzstanFlag from "../../../public/images/kyrgyzstan.png";
import RussiaFlag from "../../../public/images/russia.png";
import TajikistanFlag from "../../../public/images/tajikistan.png";
import KazakhstanFlag from "../../../public/images/kazakhstan.png";

const countryData = [
  { name: "Kyrgyzstan", flag: KyrgyzstanFlag, code: "+996", phoneLength: 9 },
  {
    name: "Uzbekistan",
    flag: "../../../public/images/uzbekistan.png",
    code: "+998",
    phoneLength: 9,
  },
  { name: "Russia", flag: RussiaFlag, code: "+7", phoneLength: 10 },
  { name: "Tajikistan", flag: TajikistanFlag, code: "+992", phoneLength: 9 },
  { name: "Kazakhstan", flag: KazakhstanFlag, code: "+7", phoneLength: 10 },
];

const directions = ["Frontend", "Backend", "C Sharp", "UX/UI Design"];

const ConsultationPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [directionDropdownOpen, setDirectionDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const directionDropdownRef = useRef(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const handleDirectionSelect = (selectedDirection) => {
    setDirection(selectedDirection);
    setDirectionDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleDirectionDropdown = () => {
    setDirectionDropdownOpen((prev) => !prev);
  };

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    // Ограничиваем длину номера в зависимости от выбранной страны
    if (onlyDigits.length <= selectedCountry.phoneLength) {
      setPhoneNumber(onlyDigits);
    }
  };

  const handleSubmit = () => {
    setName("");
    setPhoneNumber("");
    setDirection("");
  };

  const isFormValid = () => {
    const phoneNumberDigits = phoneNumber.replace(/\D/g, "");
    return (
      name.trim() !== "" &&
      phoneNumberDigits.length === selectedCountry.phoneLength &&
      direction.trim() !== ""
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        directionDropdownRef.current &&
        !directionDropdownRef.current.contains(event.target)
      ) {
        setDirectionDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen px-4 md:px-0">
      <div className="w-full md:w-[80%] lg:w-[65%] flex flex-col items-start justify-start pt-16 md:pt-24 lg:pt-32">
        <div className="mb-8">
          <img src={okurmen} alt="okurmen logo" className="max-w-full h-auto" />
        </div>

        <div className="flex items-center mb-6">
          <div className="w-1 h-[25px] bg-orange-500 mr-3"></div>
          <p className="text-neutral-950 font-medium text-xl">Консультация</p>
        </div>

        <div className="mb-8 max-w-lg">
          <p className="text-neutral-950 text-lg">
            Чтобы связаться с нами, заполните следующую форму и отправьте нам
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center w-full relative">
          <div className="w-full md:w-[50%] lg:w-[45%] border border-orange-500 rounded-xl p-6">
            <div className="mb-4">
              <p className="text-black font-medium text-base">
                Введите ваше имя
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <p className="text-black font-medium text-base">Направление</p>
              <div className="relative" ref={directionDropdownRef}>
                <button
                  onClick={toggleDirectionDropdown}
                  className="w-full border px-3 py-2 rounded-md flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {direction || "Направление"}
                  <span
                    className={`ml-2 transform transition-transform ${
                      directionDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {directionDropdownOpen && (
                  <ul className="absolute mt-2 w-full border bg-white rounded-md shadow-lg z-10">
                    {directions.map((dir) => (
                      <li
                        key={dir}
                        onClick={() => handleDirectionSelect(dir)}
                        className="cursor-pointer p-2 hover:bg-gray-100"
                      >
                        {dir}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-black font-medium text-base">
                Введите ваш номер
              </p>
              <div className="flex">
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className="w-6 h-6 mr-2"
                    />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute mt-2 w-32 border bg-white rounded-md shadow-lg z-10">
                      {countryData.map((country) => (
                        <li
                          key={country.name}
                          onClick={() => handleCountrySelect(country)}
                          className="cursor-pointer flex items-center p-2 hover:bg-gray-100"
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-6 h-6 mr-2"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex items-center">
                  <span className="text-lg mr-2">{selectedCountry.code}</span>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="000 000 000"
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!isFormValid()}
            className={`w-[180px] h-[50px] absolute bottom-8 right-8 bg-orange-500 text-white py-2 px-6 rounded-md ${
              !isFormValid()
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-orange-600"
            }`}
          >
            Отправить
          </button>

          <div className="w-full md:w-[50%] lg:w-[45%]">
            <img
              src={greet}
              alt="greet"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
