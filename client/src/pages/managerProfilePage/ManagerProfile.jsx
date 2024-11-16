import { useEffect, useRef, useState } from "react";
import ProfileInput from "../../ui/inputs/ProfilePageInput";
import { useDispatch, useSelector } from "react-redux";
import { managerGetProfile } from "../../redux/auth/ProfileSlice";
import BarChart from "../../ui/charts/BarChart";
import InputImage from "../../ui/inputs/InputImage";
import { useNavigate } from "react-router-dom";
import ButtonOrange from "../../ui/buttons/ButtonOrange";

const ManagerProfile = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const inputRef = useRef(null);
  const data = useSelector((state) => state.profileReducer.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(managerGetProfile());
  }, [dispatch]);

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
    <div className="container pb-[50px]">
      <div className=" flex justify-between gap-[30px] min-h-[100vh] pt-[100px]  max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col justify-center w-max mb-[46px]">
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
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Return") {
                    handleSaveChangeValue();
                    setIsUpdate(false);
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
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-[25px]"
            >
              <ProfileInput
                placeholder={"менеджер"}
                type={"text"}
                title={"Текущий статус  "}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"manager345@gmal.com"}
                type={"text"}
                title={"E-mail"}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"234"}
                type={"text"}
                title={"Количество приглашенных студентов  "}
                isUpdate={isUpdate}
              />
              <div
                className=" flex flex-wrap justify-between mt-[10px] w-full self-end
            "
              >
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
            <button
              onClick={() => navigate("/students")}
              className=" font-bold text-[20px] text-[#FF8A00] cursor-pointer  p-[5px]"
            >
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
                        <div
                          onClick={() => {
                            navigate(`/group/${colItem.NumGroup}`);
                          }}
                          className="flex last:mb-[30px] border border-solid cursor-pointer border-[#FF8A00] rounded-full py-[9px] px-[20px]"
                        >
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
