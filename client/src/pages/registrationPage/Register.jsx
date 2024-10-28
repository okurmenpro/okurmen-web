import { useNavigate } from "react-router-dom";
import ButtonOrange from "../../ui/ButtonOrange";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";

const Register = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-between items-start">
      <div className="bg-[#ff8a00] lg:max-w-[40vw] md:max-w-[30vw] w-full lg:min-h-[100vw] md:min-h-[120vh] sm:min-h-[100vh] sm:max-w-[25vw] sm:block none:hidden duration-200">
        <div className="flex flex-col justify-between mt-[32px] lg:min-h-[423px] md:min-h-[350px] sm:min-h-[300px] duration-200">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="w-full flex justify-around"
          >
            <img
              className="lg:w-[70px] md:w-[60px] sm:w-[50px] duration-200"
              src={"/public/icons/logo.svg"}
              alt=""
            />
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover lg:w-[272px] sm:w-[60%]  duration-200"
              src={"/public/icons/Group.svg"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full  lg:max-w-[60vw] md:max-w-[70vw] flex justify-center pt-[55px] relative  duration-200">
        <div className=" s:w-full sm:max-w-[85%] w-full flex flex-col pt-[44px] gap-y-[86px] items-center">
          <div className="flex justify-end  cursor-pointer w-full pr-[50px]">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="sm:hidden s:block absolute top-5 left-5 cursor-pointer"
            >
              <img className="" src="/public/images/logo.png" alt="" />
            </button>
          </div>
          <div className="flex flex-col items-center max-w-[350px] w-full">
            <div className=" flex justify-center flex-col items-center mb-[83px]">
              <h1 className="pb-[11px] lg:w-fit  font-bold lg:text-4xl md:text-3xl sm:text-2xl  s:text-[1.70rem]  duration-200 ">
                Регистрация
              </h1>
              <span className=" border-solid border-[#ff8a00]  lg:border-b-[3px] w-full lg:max-w-[150px] md:max-w-[120px]  sm:border-b-2 sm:max-w-[100px]  s:max-w-[120px] s:border-b-[2px]   duration-200 "></span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-start gap-[38.5px] items-center w-full  lg:max-w-[350px] md:max-w-[300px] sm:max-w-[300px] xs:max-w-[300px] 
            s:max-w-[250px]
            duration-200"
            >
              <Input
                placeholder={"Введите имя "}
                type={"text"}
                {...register("name", { required: true, minLength: 4 })}
              />
              <Input
                placeholder={"Введите номер"}
                type={"number"}
                {...register("name", { required: true, minLength: 4 })}
              />
              <Input
                placeholder={"Введите свой email  "}
                type={"email"}
                {...register("name")}
              />
              <div className="flex justify-center">
                <div className="max-w-[185px] mt-[21px] cursor-pointer">
                  <ButtonOrange
                    handleFunction={() => {
                      onSubmit();
                    }}
                  >
                    Далее
                  </ButtonOrange>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
