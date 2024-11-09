import ProfileInput from "../../ui/inputs/ProfilePageInput";
import InputImage from "../../ui/inputs/InputImage";
import ButtonOrange from "../../ui/ButtonOrange";
import { useRef, useState } from "react";

const ProfilePage = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    setIsUpdate(true);
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
    <div className="container">
      <div className=" flex justify-between gap-[30px] min-h-[100vh] pt-[100px]  max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col w-full justify-center  mb-[46px]">
            <div className="flex justify-center mb-[10px]">
              <InputImage
                isUpdate={isUpdate}
                onChange={(event) => {
                  handleFileChange(event);
                }}
              />
            </div>

            {isUpdate ? (
              <input
                type="text"
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
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className={`flex flex-col ${isUpdate ? "gap-[10px]" : "gap-[20px]"}`}
            >
              <ProfileInput
                placeholder={"Гость"}
                type={"text"}
                title={"Текущий статус  "}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Возраст  "}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Направление  "}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Срок обучения "}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"gost345@gmal.com"}
                type={"text"}
                title={"E-mail "}
                isUpdate={isUpdate}
              />
              <div className=" flex  flex-wrap justify-between mt-[10px] w-full self-end">
                <div className="">
                  <ButtonOrange
                    handleFunction={() => {
                      setIsUpdate(true);
                      if (!isUpdate) {
                        handleButtonClick();
                      }
                      handleSaveChangeValue();
                    }}
                  >
                    <p className="text-lg">
                      {isUpdate ? "Сохранить" : "Изменить"}
                    </p>
                  </ButtonOrange>
                </div>
                <div>
                  {isUpdate && (
                    <ButtonOrange
                      handleFunction={() => {
                        setIsUpdate(false);
                      }}
                    >
                      <p className="text-lg">Отменить</p>
                    </ButtonOrange>
                  )}
                </div>
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
