import { useNavigate } from "react-router-dom";
import { RxCross1 as Back } from "react-icons/rx";
import { useEffect, useState } from "react";

const SideBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const [checkboxState, setCheckboxState] = useState({
    Backend: false,
    "UX/UI": false,
    Frontend: false,
    Гость: false,
    Студент: false,
    Выпускник: false,
    Internship: false,
    Bootcamp: false,
  });

  const Checkbox = ({ selected, label, onChange }) => (
    <label className="flex items-center gap-2 cursor-pointer relative">
      <input
        type="checkbox"
        checked={selected}
        onChange={onChange}
        className="w-6 h-6 appearance-none border border-gray-400 rounded-md checked:bg-orange-500 checked:border-orange-500 focus:ring-2 focus:ring-orange-500 relative"
      />
      <span className="text-black">{label}</span>
      <span
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-2 border-t-2 border-r-2 border-white rotate-[130deg] ${
          selected ? "block" : "hidden"
        }`}
      ></span>
    </label>
  );
  
  
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleCheckboxChange = (label) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handleClear = () => {
    console.log("Clearing checkboxes");
    setCheckboxState({
      Backend: false,
      "UX/UI": false,
      Frontend: false,
      Гость: false,
      Студент: false,
      Выпускник: false,
      Internship: false,
      Bootcamp: false,
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 z-30 h-full bg-white duration-300 ${
          isOpen ? "left-0" : "-left-full"
        } w-3/4 sm:w-2/3 md:w-1/2 lg:w-[381px]`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-[120px] -right-[100px] flex items-center justify-center bg-white p-2 rounded-full shadow-md"
        >
          <Back size={25} />
        </button>

        <div className="pt-[30px] px-[30px] h-full overflow-y-auto flex flex-col justify-between">
          <div>
            

            <ul className="flex flex-col gap-[25px] mb-5">
              <li>
                <button
                  onClick={() => {
                    navigate("/students");
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

            <div className="flex flex-col gap-5 text-xl font-medium">
              <p>Направление</p>
              <Checkbox
                selected={checkboxState["Backend"]}
                label={"Backend"}
                onChange={() => handleCheckboxChange("Backend")}
              />
              <Checkbox
                selected={checkboxState["UX/UI"]}
                label={"UX/UI"}
                onChange={() => handleCheckboxChange("UX/UI")}
              />
              <Checkbox
                selected={checkboxState["Frontend"]}
                label={"Frontend"}
                onChange={() => handleCheckboxChange("Frontend")}
              />
              <p>Статус</p>
              <Checkbox
                selected={checkboxState["Гость"]}
                label={"Гость"}
                onChange={() => handleCheckboxChange("Гость")}
              />
              <Checkbox
                selected={checkboxState["Студент"]}
                label={"Студент"}
                onChange={() => handleCheckboxChange("Студент")}
              />
              <Checkbox
                selected={checkboxState["Выпускник"]}
                label={"Выпускник"}
                onChange={() => handleCheckboxChange("Выпускник")}
              />
              <p>Уровень</p>
              <Checkbox
                selected={checkboxState["Internship"]}
                label={"Internship"}
                onChange={() => handleCheckboxChange("Internship")}
              />
              <Checkbox
                selected={checkboxState["Bootcamp"]}
                label={"Bootcamp"}
                onChange={() => handleCheckboxChange("Bootcamp")}
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              onClick={handleClear}
              className="w-full py-2 text-center bg-orange-500 text-white font-medium rounded-lg"
            >
              Очистить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
