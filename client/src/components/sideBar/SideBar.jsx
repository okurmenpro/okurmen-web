import Checkbox from "../../ui/inputs/Checkox";
import { useNavigate } from "react-router-dom";
import { MdOutlineBackspace as Back } from "react-icons/md";
import { useEffect } from "react";

const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 z-30 h-full bg-white duration-300 ${
          isOpen ? "left-0" : "-left-full"
        } w-3/4 sm:w-2/3 md:w-1/2 lg:w-[381px]`}
      >
        <div className="pt-[30px] px-[30px] h-full overflow-y-auto">
          {/* Back button */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-medium">Меню</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center"
            >
              <Back size={25} />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-[25px] mb-5">
            <li>
              <button
                onClick={() => {
                  setTimeout(() => {
                    navigate("/students");
                  }, 300);
                  setIsOpen(false);
                }}
                className="flex items-center font-medium text-base"
              >
                Заявки
                <img
                  className="mt-[2px] ml-3"
                  src="/icons/arrowRight.svg"
                  alt="arrow"
                />
              </button>
            </li>
          </ul>

          {/* Filters */}
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
    </>
  );
};

export default SideBar;
