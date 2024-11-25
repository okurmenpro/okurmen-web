import React from "react";
import figmalogo from "../../../public/images/figmalogo.png";
import { NavLink } from "react-router-dom";
import ButtonConsultation from "../../ui/buttons/ButtonConsultation";
const UxUiDescription = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-around container ">
        <div className="mr-10">
          <strong className="font-bold text-6xl text-blue-700 ">
            UX/UI design
          </strong>
          <p className="w-[632px] h-[216px] md:w-[100%] md:h-auto pt-10 text-zinc-950 font-medium text-xl">
            UX/UI дизайн — это процесс создания удобных и <br /> привлекательных
            интерфейсов для пользователей. <br /> Проще говоря, UI — это
            "картинка", а UX — это то, как всё <br /> работает для удобства
            пользователя. Вместе они помогают <br /> создать интуитивные и
            удобные приложения или сайты, <br />
            которыми приятно и легко пользоваться.
          </p>
          <ButtonConsultation/>
        </div>
        <div>
          <img
            className="w-[250px] h-[370px] mt-10"
            src={figmalogo}
            alt="Figma Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default UxUiDescription;
