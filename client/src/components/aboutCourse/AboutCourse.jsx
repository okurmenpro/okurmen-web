import React from "react";
import Button from "../button/Button";

const AboutCourse = ({ title, description, image, imageAlt }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-white p-4 md:p-6 rounded-lg mt-10 md:mt-[70px] mx-auto max-w-[95%] md:w-[1200px] mb-[-60px] md:mb-[-180px]">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-[rgb(0,6,148)] text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-gray-700 my-4 font-medium text-base sm:text-lg md:text-xl">
          {description}
        </p>
        <Button
          ButtonText="Консультация"
          className="w-full sm:w-auto px-6 py-2"
          to="/consultation"
        />
      </div>
      <div className="w-full md:w-[50%] flex justify-center p-4">
        <img
          src={image}
          alt={imageAlt}
          className="hidden md:order-none md:flex justify-center p-4max-w-full h-auto md:h-auto sm:max-h-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutCourse;
