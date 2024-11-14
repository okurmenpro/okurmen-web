import { useParams } from "react-router-dom";
import AttendanceChart from "../../ui/charts/AttendanceChart";
import ProfileInput from "../../ui/inputs/ProfilePageInput";

const StudentProfile = () => {
  const studentId = useParams().id;
  console.log(studentId);

  return (
    <div className="container">
      <div className=" flex justify-between gap-[30px] min-h-[100vh] pt-[100px]  max-lg:flex-wrap">
        <div
          className="flex flex-col justify-start
          items-center max-w-[400px] w-full"
        >
          <div className="flex flex-col w-full justify-center  mb-[46px]">
            <div className="flex justify-center mb-[10px]">
              <img
                className="max-w-[124px] w-full  h-[124px] mb-[9px] self-center  rounded-full object-fill   bg-center bg-no-repeat"
                src="/public/images/profileImg.png"
                alt=""
              />
            </div>

            <>
              <p  className="text-center   text-base font-bold">name</p>
            </>
          </div>
          <div className="flex flex-col max-w-[390px] w-full">
            <form
              onClick={(e) => {
                e.preventDefault();
              }}
              className={`flex flex-col gap-[20px]`}
            >
              <ProfileInput
                placeholder={"Студент"}
                type={"text"}
                title={"Текущий статус  "}
              />
              <ProfileInput
                placeholder={"17"}
                type={"text"}
                title={"Возраст  "}
              />
              <ProfileInput
                placeholder={"Frontend"}
                type={"text"}
                title={"Направление  "}
              />
              <ProfileInput
                placeholder={"12.11.2024 - 12.05.2025"}
                type={"text"}
                title={"Срок обучения "}
              />
              <ProfileInput
                placeholder={"asanpro01@gmal.com"}
                type={"text"}
                title={"E-mail "}
              />
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

export default StudentProfile;
