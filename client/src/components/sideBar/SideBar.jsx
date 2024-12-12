import { RxCross1 as Back } from "react-icons/rx";
import Button from "../button/Button";

const SideBar = ({ isOpen, setIsOpen, checkboxState, setCheckboxState, onFilter }) => {
  const Checkbox = ({ selected, label, onChange }) => (
    <label className="flex items-center gap-2 cursor-pointer relative">
      <input
        type="checkbox"
        checked={selected}
        onChange={onChange}
        className="w-6 h-6 appearance-none border border-gray-400 rounded-md checked:bg-orange-500 checked:border-orange-500 focus:ring-2 focus:ring-orange-500 relative"
      />
      <span className="text-black">{label}</span>
    </label>
  );

  const handleCheckboxChange = (label) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handleClear = () => {
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

          <div className="mb-4 flex flex-col">
            <Button ButtonText="Искать"  color="border_orange" onClick={onFilter} />
            <Button ButtonText="Очистить" onClick={handleClear} color="orange" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
