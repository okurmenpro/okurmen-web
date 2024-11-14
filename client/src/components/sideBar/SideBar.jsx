/* eslint-disable react/prop-types */
import Checkbox from "../../ui/inputs/Checkox";
import { useNavigate } from "react-router-dom";
const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`" fixed w-full h-[100vh] bg-white top-[102px]  z-30  duration-300" ${
        isOpen
          ? " max-w-[381px]  left-0 duration-300"
          : " max-w-[381px] -left-full duration-300"
      }`}
    >
      <div className="pt-[30px] px-[30px]">
        <ul className="flex flex-col gap-[25px] mb-5">
          <li>
            <button
              onClick={() => {
                setTimeout(() => {
                  navigate("/students");
                }, 300);
                setIsOpen(false);
              }}
              className={`flex items-center font-medium text-base `}
            >
              Все студенты
              <img
                className="mt-[2px] ml-3"
                src="/public/icons/arrowRight.svg"
                alt="arrow"
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setTimeout(() => {
                  navigate("/applications");
                }, 300);
                setIsOpen(false);
              }}
              className={`flex items-center font-medium text-base `}
            >
              Заявки
              <img
                className="mt-[2px] ml-3"
                src="/public/icons/arrowRight.svg"
                alt="arrow"
              />
            </button>
          </li>
        </ul>
        <div className="flex flex-col gap-5 text-xl font-medium">
          <p>Направление</p>
          <Checkbox seleted={false} label={"Backend"} />
          <Checkbox seleted={false} label={"UX/UI"} />
          <Checkbox seleted={false} label={"Frontend"} />
          <p>Статус</p>
          <Checkbox seleted={false} label={"Гость"} />
          <Checkbox seleted={false} label={"Студент"} />
          <Checkbox seleted={false} label={"Выпускник"} />
          <p>Уровень</p>
          <Checkbox seleted={false} label={"Internship"} />
          <Checkbox seleted={false} label={"Bootcamp"} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
