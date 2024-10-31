import { useEffect, useRef, useState } from "react";
import ProfileInput from "../../ui/inputs/ProfileInput";
import { useDispatch, useSelector } from "react-redux";
import { managerGetProfile } from "../../redux/auth/ProfileSlice";
import BarChart from "../../ui/BarChart";
import InputImage from "../../ui/inputs/InputImage";
import ButtonOrange from "../../ui/ButtonOrange";

const ManagerProfile = () => {
  const [isInputs, setIsInputs] = useState(false);
  const inputRef = useRef(null);
  const data = useSelector((state) => state.profileReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerGetProfile());
  }, [dispatch]);

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
      <div className=" flex justify-around gap-[30px] h-[100vh] pt-[100px] px-[20px] max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col justify-center w-max mb-[46px]">
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
          <div className="flex flex-col max-w-[390px] w-full mb-[36px]">
            <form className="flex flex-col gap-[25px]">
              <ProfileInput
                placeholder={"менеджер"}
                type={"text"}
                title={"Текущий статус  "}
                handleSaveChangeValue={handleSaveChangeValue}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
              />
              <ProfileInput
                placeholder={"manager345@gmal.com"}
                type={"text"}
                title={"E-mail"}
                handleSaveChangeValue={handleSaveChangeValue}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
              />
              <ProfileInput
                placeholder={"234"}
                type={"text"}
                title={"Количество приглашенных студентов  "}
                handleSaveChangeValue={handleSaveChangeValue}
                isInputs={isInputs}
                setIsInputs={setIsInputs}
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
          <div className="max-w-[390px] w-full">
            <p className="font-bold text-1 mb-[19px]">
              Количество приглашенных студентов за месяц
            </p>
            <BarChart />
          </div>
        </div>
        <div
          className="flex flex-col justify-start
          max-w-[595px] w-full  "
        >
          <div className="flex justify-end">
            <button className=" font-bold text-[20px] text-[#FF8A00] cursor-pointer  p-[5px]">
              Все студенты
            </button>
          </div>
          <div className="flex flex-col gap-[14px] ">
            {data?.map((col) => (
              <>
                <h2 className="text-2xl font-semibold  max-md:text-3xl duration-100 text-start">
                  {col.group}
                </h2>
                <div className=" w-full  flex  border-solid border p-[20px]  rounded-[19px] border-[#FF8A00]">
                  <div className="flex flex-col gap-[10px]">
                    {col?.groups?.map((colItem) => (
                      <>
                        <div className="flex last:mb-[30px] border border-solid border-[#FF8A00] rounded-full py-[9px] px-[20px]">
                          <p className="font-bold text-[20px]">
                            {colItem.NumGroup}-гр.
                          </p>
                          <p className="font-bold text-[20px]">
                            препод:
                            <span className="text-[#FF8A00]">
                              {" "}
                              {colItem.teacher}
                            </span>
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                  <div></div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
