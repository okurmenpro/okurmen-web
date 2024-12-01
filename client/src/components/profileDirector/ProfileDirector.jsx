import { useEffect, useState } from "react";
import InputImage from "../../ui/inputs/InputImage";
import ProfileInput from "../../ui/inputs/ProfilePageInput";
import { managerGetProfile } from "../../redux/auth/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import DirectorDiagram from "../../ui/charts/DirectorDiagram";
import { useNavigate } from "react-router-dom";
import { managersList } from "../../data/managersList";

const ProfileDirector = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileReducer.data);
  const dataStatus = useSelector((state) => state.profileReducer.status);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(managerGetProfile());
  }, [dispatch]);

  const handleFileChange = (event) => {
    console.log(event);
  };

  return (
    <div className="container">
      <div className=" flex justify-between gap-[30px] min-h-[100vh] pt-[100px]  max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-start max-w-[476px] w-full"
        >
          <div className="flex flex-col w-full justify-start max-w-[390px] pr-2  self-start mb-[46px]">
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
                className="outline-none  self-center text-center pb-[9px] text-base font-bold text-[#FF8A00] w-fit border-b-[3px] border-solid border-[#FF8A00]"
              />
            ) : (
              <>
                <p className="text-center   text-base font-bold">name</p>
              </>
            )}
          </div>
          <div className="flex flex-col max-w-[390px] w-full">
            <form
              className={`flex flex-col  ${
                isUpdate ? "gap-[10px]" : "gap-[20px]"
              }`}
            >
              <ProfileInput
                placeholder={"director"}
                type={"text"}
                title={"Текущий статус"}
                registerTitle={"status"}
                isUpdate={isUpdate}
              />

              <ProfileInput
                placeholder={"Director@gmail.com"}
                type={"text"}
                title={"E-mail"}
                registerTitle={"email"}
                isUpdate={isUpdate}
              />
            </form>
          </div>
          <div className="max-w-[476px] w-full">
            <p className="font-bold text-xl mb-[19px] mt-[59px]">
              Количество поступивших студентов за месяц
            </p>
            <DirectorDiagram />
          </div>
          <div className="flex flex-col gap-[14px] mt-[40px] ">
            {dataStatus === "success" &&
              data?.map((col) => (
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
        <div className="flex flex-col max-w-[600px] w-full  pt-[133px]">
          <div
            className="flex  justify-end
          max-w-[600px] w-full gap-[13px] flex-wrap"
          >
            <button className="py-3 px-3 flex items-center rounded-2xl border-[#FF8a00] border-solid border-[1.5px]">
              <span className="bg-[#FF8A00] rounded-full flex w-[42px] h-[42px] px-[6px] py-[6px] mr-[10px]">
                <img src="/public/icons/bookOpen.svg" alt="" />
              </span>
              Курсы
            </button>
            <button className="py-3 px-3 flex items-center rounded-2xl border-[#FF8a00] border-solid border-[1.5px]">
              <span className="bg-[#FF8A00] rounded-full flex w-[42px] h-[42px] px-[6px] py-[6px] mr-[10px]">
                <img src="/public/icons/edit.svg" alt="" />
              </span>
              Редакция и создание
            </button>
            <button className="py-3 px-3 flex items-center rounded-2xl border-[#FF8a00] border-solid border-[1.5px]">
              <span className="bg-[#FF8A00] rounded-full flex w-[42px] h-[42px] px-[6px] py-[6px] mr-[10px]">
                <img src="/public/icons/folder.svg" alt="" />
              </span>
              Архив
            </button>
          </div>
          <div className="flex justify-end mt-[77px]">
            <button
              onClick={() => navigate("/students")}
              className=" font-bold text-[20px] text-[#FF8A00] cursor-pointer  p-[5px]"
            >
              Все студенты
            </button>
          </div>
          <div>
            <p className="mb-[29px] font-bold text-xl">Менеджеры</p>
            <div
              className="max-w-[388px]
            w-full max-h-[388px] h-full flex flex-col gap-[10px] overflow-y-auto scrollbar-hide px-[59px] py-[20px] border-[1px] border-solid border-[#FF8A00] rounded-3xl"
            >
              {managersList.map((manager) => (
                <>
                  <div
                    key={manager.id}
                    className="flex gap-[15px] flex-wrap items-center border-b-[1px] border-solid border-[#00000033] pb-2"
                  >
                    <img
                      className="w-[41px] "
                      src="/public/images/profileImg.png"
                      alt=""
                    />
                    <p>
                      {manager.name} <span>{manager.lastName}</span>
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDirector;
