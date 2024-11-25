import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../ui/inputs/SearchInput";
import { useEffect, useState } from "react";
import { groupStudentsSlice } from "../../redux/students/GroupStudents";
import SideBar from "../../components/sideBar/SideBar";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalAddStudent from "../../components/modalAddStudent/ModalAddStudent";
import ContainerStudents from "../../components/containerStudents/ContainerStudents";

const StudentsPage = () => {
  const data = useSelector((state) => state.groupStudentsReducer.data);
  const dispatch = useDispatch();

  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;  // 10 items per page

  useEffect(() => {
    dispatch(groupStudentsSlice());
  }, [dispatch]);

  const totalPages = Math.ceil(data?.length / rowsPerPage) || 1;
  const currentData = data?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container pb-[50px] px-4 md:px-8">
      <SideBar isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
      <div className="flex items-center justify-between flex-wrap mb-[45px] gap-[20px]">
        <div className="max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className="max-w-fit">
          <ButtonOrange
            handleFunction={() => {
              setIsModal(true);
            }}
          >
            <p className="text-base font-bold">Добавить</p>
          </ButtonOrange>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start mb-[45px]">
        <button onClick={() => setIsBarOpen(true)}>
          <img
            className="max-w-[37px] w-full"
            src="/public/icons/filter.svg"
            alt="filterIcon"
          />
        </button>
        <h1 className="text-2xl font-semibold">Все Студенты</h1>
      </div>
      <div className="mt-[40px]">
        <div className="space-y-4">
          {/* Rendering each student as a flex item */}
          {currentData?.map((student, index) => (
            <div
              key={student._id}
              className={`flex items-center justify-between gap-4 p-4 rounded-lg shadow-sm ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              {/* Profile Icon and Name */}
              <div className="flex items-center gap-4">
                <img
                  className="w-[47px] h-[47px] rounded-full"
                  src="/public/images/profileImg.png"
                  alt="profile"
                />
                <div>
                  <p className="font-semibold">{student.name}</p>
                  <p className="font-semibold">{student.lastName}</p>
                </div>
              </div>

              {/* Group */}
              <div className="flex-1 text-[#FF8A00] font-medium">
                {student.studentGroup}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="py-[12px] px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#0acf83] border-[2px] bg-[#0acf83] hover:bg-transparent hover:text-[#0acf83] duration-300">
                  Одобрить
                </button>
                <button className="py-[12px] px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#ff0000] border-[2px] bg-[#ff0000] hover:bg-transparent hover:text-[#ff0000] duration-300">
                  Отклонить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          className="py-2 px-4 bg-gray-300 rounded-lg text-black font-semibold hover:bg-gray-400 duration-200"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Предыдущая
        </button>
        <p className="text-lg font-medium">
          Страница {currentPage} из {totalPages}
        </p>
        <button
          className="py-2 px-4 bg-gray-300 rounded-lg text-black font-semibold hover:bg-gray-400 duration-200"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Следующая
        </button>
      </div>

      <ModalAddStudent isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default StudentsPage;
s