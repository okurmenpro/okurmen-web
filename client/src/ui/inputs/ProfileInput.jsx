/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
const ProfileInput = ({ type, placeholder, title }) => {
  const [isInput, setIsInput] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setIsInput(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleSaveChangeValue = () => {
    console.log("save");
  };

  return (
    <div>
      <span className="border-solid border-[#FF8A00] broder-b-[1px]"></span>
      <div className="flex flex-col max-w-[390px] w-full">
        <div className="flex items-center">
          <p className="text-base font-bold pb-[9px] pl-[5px] ">{title}:</p>
          {isInput ? (
            <>
              <input
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Return") {
                    handleSaveChangeValue();
                  }
                }}
                type={type}
                placeholder={placeholder}
                className={` outline-none pb-[9px] pl-[10px] text-base font-bold text-[#FF8A00]`}
              />
            </>
          ) : (
            <button onClick={handleButtonClick}>
              <p
                className={`pb-[9px] pl-[10px] text-base font-bold   ${
                  placeholder === "неизвестно"
                    ? "text-[#d9d9d9]"
                    : "text-[#FF8A00]"
                }`}
              >
                {placeholder}
              </p>
            </button>
          )}
        </div>

        <span
          className={`border-solid border-[#FF8A00]  border-b-[3px] w-full max-w-[390px] rounded-xl`}
        ></span>
      </div>
    </div>
  );
};

export default ProfileInput;
