import React from "react";
import Header from "../../components/header/Header";
import figmalogo from "../../../public/images/figmalogo.png";
const UxUiPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-around container">
        <div className="mr-10">
          <strong className="font-bold text-6xl text-blue-700 ">UX/UI desing</strong>
          <p className="w-[632px] h-[216px] md:w-[100%] md:h-auto pt-10 text-zinc-950 font-medium text-xl">
            UX/UI дизайн — это процесс создания удобных и <br /> привлекательных
            интерфейсов для пользователей. <br /> Проще говоря, UI — это "картинка", а
            UX — это то, как всё <br /> работает для удобства пользователя. Вместе они
            помогают <br /> создать интуитивные и удобные приложения или сайты, <br />
            которыми приятно и легко пользоваться.
          </p>
          <button className="mt-10 text-amber-500 border-2 border-orange-500 rounded-lg text-center pt-1 pb-1 pl-4 pr-4 font-medium text-xl">Консультация</button>
        </div>
        <div>
          <img className="w-[250px] h-[370px] mt-10" src={figmalogo} alt="Figma Logo" />
        </div>
      </div>
    </>
  );
};

export default UxUiPage;
