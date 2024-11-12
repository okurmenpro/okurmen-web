/* eslint-disable react/prop-types */

const ContainerStudents = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-y-[15px] justify-between">
      {data?.map((student) => (
        <>
          <div className="lg:max-w-[545px] md:max-w-[470px]  w-full flex items-center px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00] ">
            <img
              className="lg:w-[47px] md:w-[40px] xs:w-[30px] s:w-[28px]"
              src="/public/images/profileImg.png"
              alt="profile"
            />
            <div className="flex justify-between   gap-2 w-full items-center pl-[17px]">
              <div className="flex  items-center gap-2 justify-between max-w-[50%] w-full">
                <p className="flex gap-[5px] lg:text-xl md:text-base s:text-sm font-semibold">
                  <span>{student.name}</span>
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden s:w-[40px] xs:w-[60px] sm:w-fit">
                    {student.lastName}
                  </span>
                </p>
                <p className="text-[#FF8A00] lg:text-base s:text-sm font-medium text-end pt-[3px] ">
                  {student.studentGroup}
                </p>
              </div>
              <div className="flex items-center justify-between lg:max-w-[95px] md:max-w-[80px] s:max-w-[60px] w-full lg:gap-[15px] s:gap-2">
                <button>
                  <img
                    className="lg:w-8 md:w-7 s:w-[18px]"
                    src="/public/icons/warning.svg"
                    alt="warning"
                  />
                </button>
                <button>
                  <img
                    className="lg:w-8 md:w-7 sx:w-[26px] s:w-[18px]"
                    src="/public/icons/deleteIcon.svg"
                    alt="deleteIcon"
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ContainerStudents;
