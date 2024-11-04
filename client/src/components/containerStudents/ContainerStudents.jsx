/* eslint-disable react/prop-types */

const ContainerStudents = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-[26px] justify-between">
      {data?.map((student) => (
        <>
          <div className="max-w-[545px] w-full flex items-center px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00] ">
            <img
              className="w-[47px] mr-[29px]"
              src="/public/images/profileImg.png"
              alt="profile"
            />
            <div className="flex justify-between w-full items-center ">
              <div className="flex gap-[18px] items-center">
                <p className="flex gap-[5px] text-xl font-semibold">
                  <span>{student.name}</span>
                  <span>{student.lastName}</span>
                </p>
                <p className="text-[#FF8A00] text-base font-medium text-end pt-[3px]">
                  {student.studentGroup}
                </p>
              </div>
              <div className="flex items-center justify-between max-w-[95px] w-full gap-[15px]">
                <button>
                  <img src="/public/icons/warning.svg" alt="warning" />
                </button>
                <button>
                  <img src="/public/icons/deleteIcon.svg" alt="deleteIcon" />
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
