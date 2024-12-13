/* eslint-disable react/prop-types */
import { useState } from "react";

const Checkbox = ({seleted , label}) => {
  const [checked, setChecked] = useState(seleted);
  return (
    <label className="relative  text-lg cursor-pointer flex items-center w-fit ">
      <input
        type="checkbox"
        className="absolute opacity-0 cursor-pointer"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span
        className={`flex items-center justify-center w-[22px] h-[22px] border-2 rounded-md transition-all duration-300 ${
          checked
            ? "bg-orange-500 border-orange-500 shadow-md"
            : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <span className="block w-[6px] h-[10px] border-white border-r-2 border-b-2 transform rotate-45 scale-100 transition-transform duration-300"></span>
        )}
      </span>
      <span className="text-base font-normal ml-3">{label}</span>
    </label>
  );
};

export default Checkbox;
