import { useRef, useState } from "react";
import HeaderAdmin from "../../components/headerAdmin/HeaderAdmin";
import ProfileInput from "../../ui/inputs/ProfileInput";
import InputImage from "../../ui/inputs/InputImage";
import ButtonOrange from "../../ui/ButtonOrange";

const ProfilePage = () => {
  const [isInputs, setIsInputs] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setIsInputs(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  // save form && info user
  const handleSaveChangeValue = () => {
    console.log("save");
  };
  // save photo
  const handleFileChange = (event) => {
    console.log(event);
  };

  return (
    <div>
      <HeaderAdmin />
      <div className=" flex justify-around gap-[30px] h-[100vh] pt-[100px] px-[20px] max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col w-full justify-center  mb-[46px]">
            <div className="flex justify-center mb-[10px]">
              <InputImage
                onChange={(event) => {
                  handleFileChange(event);
                }}
              />
            </div>

            {isInputs ? (
              <input
                type="text"
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Return") {
                    handleSaveChangeValue();
                    setIsInputs(false);
                  }
                }}
                placeholder="name"
                className="outline-none  self-center text-center pb-[9px] text-base font-bold text-[#FF8A00] w-fit border-b-[3px] border-solid border-[#FF8A00]  "
              />
            ) : (
              <>
                <p className="text-center   text-base font-bold">name</p>
              </>
            )}
          </div>
          <div className="flex flex-col max-w-[390px] w-full">
            <form className="flex flex-col gap-[25px]">
              <ProfileInput
                placeholder={"Гость"}
                type={"text"}
                title={"Текущий статус  "}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
                handleSaveChangeValue={handleSaveChangeValue}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Возраст  "}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
                handleSaveChangeValue={handleSaveChangeValue}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Направление  "}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
                handleSaveChangeValue={handleSaveChangeValue}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Срок обучения "}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
                handleSaveChangeValue={handleSaveChangeValue}
              />
              <ProfileInput
                placeholder={"gost345@gmal.com"}
                type={"text"}
                title={"E-mail "}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
                handleSaveChangeValue={handleSaveChangeValue}
              />
              <div
                className="mt-[10px] self-end
            "
              >
                <ButtonOrange
                  handleFunction={() => {
                    setIsInputs(!isInputs);
                    if (!isInputs) {
                      handleButtonClick();
                    }
                    handleSaveChangeValue();
                  }}
                >
                  <p className="text-lg">
                    {isInputs ? "Сохранить" : "Изменить"}
                  </p>
                </ButtonOrange>
              </div>
            </form>
          </div>
          <div className="flex justify-center mt-[20px]"></div>
        </div>
        <div
          className="flex flex-col justify-start
          max-w-[573px] w-full  "
        >
          <h1 className="text-4xl font-semibold mb-[23px] max-md:text-3xl duration-100">
            Для вас
          </h1>
          <div className="  w-full h-[311px] flex flex-col border-solid border  rounded-[19px] border-[#FF8A00]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
