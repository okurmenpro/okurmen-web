const ManagerProfile = () => {
  const data = useSelector((state) => state.profileReducer.data);
  return (
    <div>
      {/* <HeaderAdmin /> */}
      <div className=" flex justify-around gap-[30px] h-[100vh] pt-[100px] px-[20px] max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col justify-center w-max mb-[46px]">
            <img
              className="max-w-[124px] mb-[9px]"
              src="/public/images/profileImg.png"
              alt="image"
            />
            <p className="text-center text-base font-bold">name</p>
          </div>
          <div className="flex flex-col max-w-[390px] w-full">
            <form className="flex flex-col gap-[25px]">
              <ProfileInput
                placeholder={"Гость"}
                type={"text"}
                title={"Текущий статус  "}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Возраст  "}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Направление  "}
              />
              <ProfileInput
                placeholder={"неизвестно"}
                type={"text"}
                title={"Срок обучения "}
              />
              <ProfileInput
                placeholder={"gost345@gmal.com"}
                type={"text"}
                title={"E-mail "}
              />
            </form>
          </div>
        </div>
        <div
          className="flex flex-col justify-start
          max-w-[573px] w-full  "
        >
          <div className="flex flex-col w-full">
            <p className="text-end">Все студенты</p>
            <h2 className="text-4xl font-semibold mb-[23px] max-md:text-3xl duration-100 text-start">
              Для вас
            </h2>
          </div>
          <div className="  w-full h-[311px] flex flex-col border-solid border  rounded-[19px] border-[#FF8A00]"></div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
