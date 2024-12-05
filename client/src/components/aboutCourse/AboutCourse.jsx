import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const AboutCourse = ({ title, description, image, imageAlt }) => {
  return (
    <div className="flex flex-col justify-between md:flex-row items-center bg-white p-6 rounded-lg m-0-auto mx-auto w-[1200px] mb-[-180px]">
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-2">
          {title}
        </h2>
        <p className="text-gray-700 mb-4 my-6 font-medium text-xl">
          {description}
        </p>
        <NavLink to={"/consultation"}>
          <Button
          contentButton="Консультация"
          className={`w-[150px]`}
          />
        </NavLink>
      </div>
      <div className="order-last md:order-none md:w-[40%] flex justify-center p-4 hidden md:flex">
        <img src={image} alt={imageAlt} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutCourse;