import React from "react";
import python from "../../../public/images/python.png";
import { NavLink } from "react-router-dom";

function Python() {
  return (
    <>
      <section className="banner-block m-0-auto flex justify-between items-center w-[1440px] mx-auto">
        <div className="python-about w-[700] h-[500] ">
          <h1 className="w-[221px] h-[74px] text-blue-700  font-medium text-6xl ">
            Python
          </h1>
          <p className="w-[550px] mt-6 text-xl  leading-8">
            Python — это простой и мощный язык программирования, на котором
            можно создавать самые разные программы, от небольших скриптов до
            крупных приложений и даже игр. Он легко читается благодаря простому
            синтаксису, напоминающему обычный английский язык.
          </p>
          <p className="w-[550px] mt-5 text-xl leading-8">
            Python поможет вам освоить ключевые концепции программирования,
            включая работу с данными, автоматизацию и создание приложений.{" "}
          </p>
          <NavLink to={"/consultation"}>
            <button className="w-[213px] h-[58px] border border-orange-400 rounded-md mt-10 border-2 text-[14px] px-4 py-2 text-amber-600 font-bold	">
              Консультация
            </button>
          </NavLink>
        </div>
        <img className="w-[600px] h-[700px] ml-100 mt-20" src={python} alt="" />
      </section>
    </>
  );
}
export default Python;
