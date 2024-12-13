import { useForm } from "react-hook-form";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import { useState } from "react";

const AdminConfirmCode = () => {
  const { register } = useForm();
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="flex justify-between max-w-full min-h-[80vh]">
      <div className="flex flex-col justify-between max-w-[636px] w-full  max-h-[450px] pt-[32px]">
        <div className="flex justify-around">
          <img
            className="max-w-[70px]"
            src="/public/icons/orangeLogo.svg"
            alt=""
          />
          <span></span>
        </div>
        <div className="flex justify-center">
          <img
            className="max-w-[269px]"
            src="/public/icons/orangeCloud.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className=" flex justify-center flex-col items-center mb-[83px]">
          <h1 className="pb-[11px] lg:w-fit  font-bold lg:text-4xl md:text-3xl sm:text-2xl  s:text-[1.70rem]  duration-200 ">
            Подтверждение
          </h1>
          <span className=" border-solid border-[#ff8a00]  lg:border-b-[3px] w-full lg:max-w-[150px] md:max-w-[120px]  sm:border-b-2 sm:max-w-[100px]  s:max-w-[120px] s:border-b-[2px]   duration-200 "></span>
          <p className="font-semibold text-base leading-5  mt-[47px]  max-w-[365px] text-center">
            Через некоторое время вашу заявку проверят менеджеры и отправят вам
            одноразовый код подтверждения на вашу электронную почту.{" "}
          </p>
        </div>
        <form
          className="flex flex-col justify-start gap-[38.5px] items-center w-full  lg:max-w-[350px] md:max-w-[300px] sm:max-w-[300px] xs:max-w-[300px] 
            s:max-w-[250px]
            duration-200"
        >
          <div className="flex flex-col max-w-[350px] w-full">
            <input
              type={"text"}
              placeholder={"Введите код подтверждения"}
              className={`max-w-[350px] w-full outline-none pb-[9px] pl-[5px] text-base font-bold `}
              {...register("code", {
                required: true,
                onChange: (e) => setValue(e.target.value),
              })}
            />

            <span
              className={`border-solid border-[#ff8a00] border-b-[3px] w-full max-w-[350px] rounded-xl`}
            ></span>
          </div>
          <div className="flex justify-center max-w-[185px] w-full">
            <div className=" w-full mt-[21px] cursor-pointer text-white font-bold text-xl">
              <ButtonOrange
                disabled={value === "" ? true : false}
                handleFunction={() => {}}
              >
                Далее
              </ButtonOrange>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminConfirmCode;
