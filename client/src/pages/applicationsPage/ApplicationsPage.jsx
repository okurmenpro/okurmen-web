import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../ui/inputs/SearchInput";
import { useEffect, useState } from "react";
import { groupStudentsSlice } from "../../redux/students/GroupStudents";
import SideBar from "../../components/sideBar/SideBar";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalAddStudent from "../../components/modalAddStudent/ModalAddStudent";
import { FaPlus } from "react-icons/fa";

const ApplicationsPage = () => {
  const data = useSelector((state) => state.groupStudentsReducer.data);
  const dispatch = useDispatch();

  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;

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

  const truncateName = (name, maxLength = 15) => {
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...`;
    }
    return name;
  };

  return (
    <div className="container pb-8 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-semibold flex justify-center mb-[60px] pt-[40px] font-medium">
        Заявки
      </h1>
      <SideBar isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
      <div className="flex flex-wrap justify-between items-center gap-5 mb-[30px]">
        <div className="flex-1 min-w-[250px] max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className="max-w-fit">
          <ButtonOrange
            handleFunction={() => {
              setIsModal(true);
            }}
          >
            <FaPlus fill="white" className="bold" />
          </ButtonOrange>
        </div>
      </div>
      <div className="w-full overflow-x-auto mt-[30px]">
        <table className="w-full text-left border-collapse shadow-lg">
          <thead className="bg-white border text-md md:text-lg font-bold text-black">
            <tr>
              <th className="p-4 md:p-6 w-[40%] min-w-[150px]">Имя Фамилия</th>
              <th className="p-4 md:p-6 w-[30%] min-w-[100px]">Группа</th>
              <th className="p-4 md:p-6 w-[30%] text-center min-w-[150px]">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((student, index) => (
              <tr
                key={student._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-4 md:p-6 flex items-center gap-4">
                  <img
                    className="w-[40px] md:w-[47px] h-[40px] md:h-[47px] rounded-full"
                    src="/public/images/profileImg.png"
                    alt="profile"
                  />
                  <p
                    className="text-sm md:text-lg font-semibold truncate max-w-[150px] md:max-w-[200px]"
                    title={`${student.name} ${student.lastName}`}
                  >
                    {truncateName(`${student.name} ${student.lastName}`)}
                  </p>
                </td>
                <td className="p-4 md:p-6 text-[#FF8A00] font-medium">
                  {student.studentGroup}
                </td>
                <td className="p-4 md:p-6 text-center">
                  <div className="flex justify-center gap-2 md:gap-4">
                    <button className="py-2 px-4 text-sm md:py-[12px] md:px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#0acf83] border-[2px] bg-[#0acf83] hover:bg-transparent hover:text-[#0acf83] duration-300">
                      Одобрить
                    </button>
                    <button className="py-2 px-4 text-sm md:py-[12px] md:px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#ff0000] border-[2px] bg-[#ff0000] hover:bg-transparent hover:text-[#ff0000] duration-300">
                      Отклонить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <button
          className="py-2 px-4 bg-gray-300 rounded-lg text-black font-semibold hover:bg-gray-400 duration-200"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Предыдущая
        </button>
        <p className="text-sm md:text-lg font-medium">
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

export default ApplicationsPage;
