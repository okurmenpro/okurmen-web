import React from "react";
import saadat from "../../../public/images/soke.jpg";
import tansuluu from '../../../public/images/toha.jpg';
import kulpunai from '../../../public/images/kuke.png';
import aidana from '../../../public/images/aidana.png';
import alisher from '../../../public/images/alisher.PNG';

const Mentors = () => {
  const mentors = [
    { name: "Саадат Жолчубаева", category: "Frontend", portrait: saadat },
    { name: "Тансулуу Карыбекова", category: "Frontend", portrait: tansuluu },
    { name: "Кулпунай Жекшенбекова", category: "Frontend", portrait: kulpunai },
    { name: "Айдана Качкынбай кызы", category: "Frontend", portrait: aidana },
    { name: "Алишер Талипжанов", category: "Frontend", portrait: alisher },
  ];

  return (
    <div
      id="mentors"
      className="container mx-auto flex flex-col items-start mt-[100px] mb-[70px] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2">Менторы</span>
      </h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide no-scrollbar w-full">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[350px] bg-white shadow-md rounded-xl flex flex-col items-center justify-between text-center p-6 relative sm:w-[240px] sm:h-[300px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-xl shadow-inner"></div>

            <div className="relative z-10 w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] overflow-hidden rounded">
              <img
                src={mentor.portrait}
                alt={mentor.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="relative z-10">
              <p className="text-lg font-medium text-black mb-2 sm:text-base md:text-sm lg:text-base">
                {mentor.name}
              </p>
              <p className="text-orange-500 font-medium sm:text-sm md:text-xs lg:text-sm">
                {mentor.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
