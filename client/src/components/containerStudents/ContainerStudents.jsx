/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsTrash as Trash } from "react-icons/bs";
import { RiErrorWarningLine as Warn } from "react-icons/ri";

const ContainerStudents = ({ data }) => {
  const navigate = useNavigate();

  
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 8;


  const totalStudents = data.length;
  const totalPages = Math.ceil(totalStudents / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = data.slice(startIndex, startIndex + studentsPerPage);

  return (
    <div>
     
      <div className="flex flex-wrap gap-[26px] justify-between">
        {currentStudents.map((student) => (
          <div
            key={student._id}
            onClick={() => navigate(`/student-profile/${student._id}`)}
            className="max-w-[545px] w-full flex items-center px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00]"
          >
            <img
              className="w-[47px] mr-[29px]"
              src="/public/images/profileImg.png"
              alt="profile"
            />
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <p className="text-[#FF8A00] text-base font-medium">
                  {student.studentGroup}
                </p>
                <p className="flex gap-[5px] text-xl font-semibold">
                  <span>{student.name}</span>
                  <span>{student.lastName}</span>
                </p>
              </div>

              <div className="flex items-center justify-end gap-[15px]">
                <button>
                  <Warn size={30} fill="orange" />
                </button>
                <button>
                  <Trash size={27} fill="red" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg"
          >
            предыдущий
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg"
          >
            следующий
          </button>
        )}
      </div>
    </div>
  );
};

export default ContainerStudents;
