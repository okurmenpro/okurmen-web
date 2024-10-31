/* eslint-disable react/prop-types */
const ProfileInput = ({
  type,
  placeholder,
  title,
  isInputs,
  handleSaveChangeValue,
  setIsInputs,
}) => {
  return (
    <div>
      <span className="border-solid border-[#FF8A00] broder-b-[1px]"></span>
      <div className="flex flex-col max-w-[390px] w-full">
        <div className="flex items-center">
          <p className="text-base font-bold pb-[9px] pl-[5px] whitespace-nowrap">
            {title}:
          </p>
          {isInputs ? (
            <>
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Return") {
                    handleSaveChangeValue();
                    setIsInputs(false);
                  }
                }}
                type={type}
                placeholder={placeholder}
                className={` outline-none pb-[9px] pl-[10px] text-base font-bold text-[#FF8A00] w-fit`}
              />
            </>
          ) : (
            <p
              className={`pb-[9px] pl-[10px] text-base font-bold   ${
                placeholder === "неизвестно"
                  ? "text-[#d9d9d9]"
                  : "text-[#FF8A00]"
              }`}
            >
              {placeholder}
            </p>
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
