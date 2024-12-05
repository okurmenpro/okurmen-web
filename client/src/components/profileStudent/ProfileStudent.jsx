/* eslint-disable react-hooks/exhaustive-deps */
import ProfileInput from "../../ui/inputs/ProfilePageInput";
import InputImage from "../../ui/inputs/InputImage";
import { useEffect, useRef, useState } from "react";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getProfile } from "../../redux/auth/ProfileSlice";
import { useForm } from "react-hook-form";
import AttendanceChart from "../../ui/charts/AttendanceChart";
import { useMatch } from "react-router-dom";

const ProfileStudent = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileReducer.data);
  const [isUpdate, setIsUpdate] = useState(false);
  const [photo, setPhoto] = useState(null);
  const inputRef = useRef(null);
  const isStudentProfile = useMatch("/student-profile/:id");

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: profileData?.name,
    },
  });

  const handleButtonClick = () => {
    setIsUpdate(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleSaveChangeValue = (data) => {
    if (
      !data.status ||
      !data.age ||
      !data.direction ||
      !data.term ||
      !data.email
    ) {
      alert("Заполните все поля");
      setIsUpdate(true);
      return;
    }
    if (photo !== null) {
      if (photo) {
        const reader = new FileReader();

        reader.onload = () => {
          const base64Image = reader.result;
          localStorage.setItem("photo", base64Image);
        };

        reader.readAsDataURL(photo);
      }
    }

    dispatch(createProfile(data));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  useEffect(() => {
    if (profileData) {
      setValue("name", profileData.name || "");
      setValue("status", profileData.status || "");
      setValue("age", profileData.age || "");
      setValue("direction", profileData.direction || "");
      setValue("term", profileData.term || "");
      setValue("email", profileData.email || "");
    }
  }, [profileData, setValue]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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
                {...register("name", { required: true })}
                className="outline-none  self-center text-center pb-[9px] text-base font-bold text-[#FF8A00] w-fit border-b-[3px] border-solid border-[#FF8A00]  "
              />
            ) : (
              <>
                <p className="text-center   text-base font-bold">
                  {profileData?.name}
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col max-w-[390px] w-full">
            <form
              onSubmit={handleSubmit(handleSaveChangeValue)}
              className={`flex flex-col ${
                isUpdate ? "gap-[10px]" : "gap-[20px]"
              }`}
            >
              <ProfileInput
                placeholder={profileData?.status}
                type={"text"}
                title={"Текущий статус"}
                register={register}
                registerTitle={"status"}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={profileData?.age}
                type={"text"}
                title={"Возраст"}
                register={register}
                registerTitle={"age"}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={profileData?.direction}
                type={"text"}
                title={"Направление"}
                register={register}
                registerTitle={"direction"}
                isUpdate={isUpdate}
              />

              <ProfileInput
                placeholder={profileData?.term}
                type={"text"}
                title={"Срок обучения"}
                register={register}
                registerTitle={"term"}
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={profileData?.email}
                type={"text"}
                title={"E-mail"}
                register={register}
                registerTitle={"email"}
                isUpdate={isUpdate}
              />
              {!isStudentProfile ? (
                <>
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
                </>
              ) : null}
            </form>
          </div>
          <div className="flex justify-center mt-[20px]"></div>
        </div>
        <div className="flex flex-col max-w-[445px] w-full gap-y-[70px] pt-[78px]">
          <div
            className="flex flex-col justify-start
          max-w-[443px] w-full  "
          >
            <h1 className="text-4xl font-semibold mb-[23px] max-md:text-3xl duration-100">
              В группе
            </h1>
            <div className="mt-[21px] max-w-[443px] w-full rounded-[14px] border-[2px] border-solid border-[#FF8A00] px-[19px] py-[23px]">
              <p className=" w-full mb-1 text-xl font-bold">
                <span>1</span> - гр.{" "}
                <span className="text-[#FF8a00]">Frontend</span> препод:{" "}
                <span className="text-[#FF8a00]">Иван</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col gap-y-[9px]">
              <h2 className="mb-[23px] text-2xl font-bold">Посещаемость</h2>
              <div className="flex align-center  w-fit">
                <div className="w-[30px] h-[30px] bg-[#0ACF83] rounded-full"></div>
                <p className="text-base font-bold ml-[8px] pt-[1px]">
                  Присутствие
                </p>
              </div>
              <div className="flex align-center  w-fit">
                <div className="w-[30px] h-[30px] bg-[#FF0000] rounded-full"></div>
                <p className="text-base font-bold ml-[8px] pt-[1px]">
                  Отсутствие
                </p>
              </div>
            </div>

            <AttendanceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudent;
