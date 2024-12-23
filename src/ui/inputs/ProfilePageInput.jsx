/* eslint-disable react/prop-types */
const ProfileInput = ({
  type,
  placeholder,
  title,
  isUpdate,
  register,
  registerTitle,
}) => {
  return (
    <div>
      <span className="border-solid border-[#FF8A00] broder-b-[1px]"></span>
      <div className="flex flex-col max-w-[390px] w-full">
        <div
          className={`${
            isUpdate ? "flex-col items-start" : "flex items-center"
          }`}
        >
          <p className="text-base font-bold pb-[9px]  pl-[5px] whitespace-nowrap">
            {title}:
          </p>
          {isUpdate ? (
            <input
              type={type}
              placeholder={placeholder}
              {...register(registerTitle, { required: true })}
              className="outline-none py-[5px] pl-[10px] text-base font-bold text-[#FF8A00] w-full border-[2px] border-solid border-[#FF8A00] rounded-[5px]"
            />
          ) : (
            <p
              className={`pb-[9px] pl-[10px] text-base  font-bold ${
                placeholder === "неизвестно"
                  ? "text-[#d9d9d9]"
                  : "text-[#FF8A00]"
              }`}
            >
              {placeholder}
            </p>
          )}
        </div>
        {!isUpdate && (
          <span className="border-solid border-[#FF8A00] border-b-[3px] w-full max-w-[390px] rounded-xl"></span>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;
