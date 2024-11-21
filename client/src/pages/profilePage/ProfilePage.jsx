/* eslint-disable react-hooks/exhaustive-deps */
import ProfileInput from "../../ui/inputs/ProfilePageInput";
import InputImage from "../../ui/inputs/InputImage";
import { useEffect, useRef, useState } from "react";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getProfile } from "../../redux/auth/ProfileSlice";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileReducer.data);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isData, setIsData] = useState(null);
  const [photo, setPhoto] = useState(null);
  const inputRef = useRef(null);

  const { register, handleSubmit } = useForm();

  console.log(isData);

  useEffect(() => {
    dispatch(getProfile());
    const lastData = profileData?.slice(-1);
    setIsData(lastData[0]);
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
  const handleSaveChangeValue = (data) => {
    console.log(data);

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
    dispatch(getProfile());
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
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
                {...register("name", { required: true })}
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
              onSubmit={handleSubmit(handleSaveChangeValue)}
              className={`flex flex-col ${
                isUpdate ? "gap-[10px]" : "gap-[20px]"
              }`}
            >
              <ProfileInput
                placeholder={"Гость"}
                type={"text"}
                title={"Текущий статус"}
                register={register}
                registerTitle={"status"} // исправлено
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Возраст"}
                register={register}
                registerTitle={"age"} // исправлено
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Направление"}
                register={register}
                registerTitle={"direction"} // исправлено
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Срок обучения"}
                register={register}
                registerTitle={"term"} // исправлено
                isUpdate={isUpdate}
              />
              <ProfileInput
                placeholder={"gost345@gmail.com"}
                type={"text"}
                title={"E-mail"}
                register={register}
                registerTitle={"email"} // исправлено
                isUpdate={isUpdate}
              />
              <div className=" flex  flex-wrap justify-between mt-[10px] w-full self-end">
                <div className="">
                  <ButtonOrange
                    handleFunction={() => {
                      if (!isUpdate) {
                        handleButtonClick();
                      }
                      setIsUpdate(!isUpdate);
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
                        window.location.reload();
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
