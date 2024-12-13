import { useForm } from "react-hook-form";
import AuthInput from "../../ui/inputs/AuthInput";
import ButtonOrange from "../../ui/buttons/ButtonOrange";

const AdminAccountSetup = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
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
            Регистрация
          </h1>
          <span className=" border-solid border-[#ff8a00]  lg:border-b-[3px] w-full lg:max-w-[150px] md:max-w-[120px]  sm:border-b-2 sm:max-w-[100px]  s:max-w-[120px] s:border-b-[2px]   duration-200 "></span>
        </div>
        <form
          className="flex flex-col justify-start gap-[38.5px] items-center w-full  lg:max-w-[350px] md:max-w-[300px] sm:max-w-[300px] xs:max-w-[300px] 
            s:max-w-[250px]
            duration-200"
        >
          <AuthInput
            placeholder={"Введите логин"}
            title={"name"}
            type={"text"}
            errors={errors}
            getValues={getValues}
            register={register}
          />
          <AuthInput
            placeholder={"Создайте пароль"}
            title={"phoneNumber"}
            type={"text"}
            errors={errors}
            getValues={getValues}
            register={register}
          />
          <AuthInput
            placeholder={"Подтвердите свой пароль"}
            title={"email"}
            type={"email"}
            errors={errors}
            getValues={getValues}
            register={register}
          />
          <div className="flex justify-center max-w-[185px] w-full">
            <div className=" w-full mt-[21px] cursor-pointer text-white font-bold text-xl">
              <ButtonOrange handleFunction={() => {}}>Далее</ButtonOrange>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAccountSetup;
