/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { IoTrashOutline as Trash  } from "react-icons/io5";
import { RiErrorWarningLine as Warn } from "react-icons/ri";
const ContainerStudents = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-[26px] justify-between">
      {data?.map((student) => (
        <>
          <div
            onClick={() => {
              navigate(`/student-profile/${student._id}`);
            }}
            className="max-w-[545px] flex-wrap w-full flex items-center px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00] "
          >
            <img
              className="w-[47px] mr-[29px]"
              src="/public/images/profileImg.png"
              alt="profile"
            />
            <div className="flex justify-between sm:max-w-[443px] flex-wrap w-full items-center ">
              <div className="flex flex-wrap items-center justify-between max-w-[228px] w-full">
                <p className="flex gap-[5px] text-xl font-semibold">
                  <span>{student.name}</span>
                  <span>{student.lastName}</span>
                </p>
                <p className="text-[#FF8A00] text-base font-medium text-end pt-[3px] ">
                  {student.studentGroup}
                </p>
              </div>
              <div className="flex items-center justify-between max-w-[95px] w-full gap-[15px]">
                <button>
                  <Warn size={30}/>
                </button>
                <button>
                  <Trash size={30}/>
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
