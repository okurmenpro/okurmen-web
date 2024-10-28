/* eslint-disable react/prop-types */
const Input = ({ placeholder, type, register, title, errors, getValues }) => {
  const getBorderColor = (field) =>
    errors[field] ? "border-red-500" : "border-[#ff8a00]";

  const objTitles = {
    password: "password",
    confirmPassword: "confirmPassword",
    code: "code",
  };

  return (
    <>
      <div className="flex flex-col max-w-[350px] w-full">
        {errors[title] && (
          <p
            className={`text-red-500 flex items-center ${
              title === objTitles[title] ? "hidden" : ""
            }`}
          >
            <img
              className="mr-[5px]"
              src="/public/images/warning.png"
              alt="warning"
            />
            {title === "name"
              ? "Введите имя"
              : title === "number"
              ? "Введите номер"
              : title === "email"
              ? "Введите свой email"
              : null}
          </p>
        )}
        {title === "confirmPassword" && errors.confirmPassword && (
          <p className="text-red-500 flex items-center font-bold text-[12px] ">
            Пароли не совпадают
          </p>
        )}
        <input
          {...register(title, {
            required: true,
            minLength:
              title === "password" || title === "confirmPassword" ? 5 : 4,
            validate:
              title === "confirmPassword"
                ? (value) => {
                    const password = getValues("password");
                    return password === value || "Пароли не совпадают";
                  }
                : undefined,
          })}
          type={type}
          placeholder={placeholder}
          className={`max-w-[350px] w-full outline-none pb-[9px] pl-[5px] text-base font-bold `}
        />

        <span
          className={`border-solid ${getBorderColor(
            title
          )} border-b-[3px] w-full max-w-[350px] rounded-xl`}
        ></span>

        {title === "confirmPassword"
          ? errors.password && (
              <>
                <p className="text-red-500 flex items-center text-[12px] font-bold  mt-[15px]">
                  Пароль должен быть не меньше 5 символов
                </p>
              </>
            )
          : null}
      </div>
    </>
  );
};

export default Input;
