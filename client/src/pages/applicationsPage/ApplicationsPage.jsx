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

  useEffect(() => {
    dispatch(groupStudentsSlice());
  }, [dispatch]);

  return (
    <div className="container pb-14">
      <h1 className="text-5xl font-semibold flex justify-center mb-[50px] font-medium">
        Заявки
      </h1>
      <SideBar isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
      <div className="flex justify-between items-center gap-5 flex-wrap mb-[45px]">
        <div className="max-w-[705px] w-full">
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
      <div className="w-full mt-[45px] overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-xl shadow-lg">
          {/* Table Header */}
          <thead className="bg-[white] border text-lg font-bold text-black rounded-xl">
            <tr>
              <th className="p-6 rounded-tl-xl">Имя Фамилия</th>
              <th className="p-6">Группа</th>
              <th className="p-6 text-center rounded-tr-xl">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.map((student, index) => (
              <tr
                key={student._id}
                className={`hover:shadow-md hover:shadow-orange-400 duration-200 rounded-xl ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-6 flex items-center gap-4 rounded-l-xl">
                  <img
                    className="w-[47px] h-[47px] rounded-full"
                    src="/public/images/profileImg.png"
                    alt="profile"
                  />
                  <p className="text-lg font-semibold">
                    {student.name} {student.lastName}
                  </p>
                </td>
                <td className="p-6 text-[#FF8A00] font-medium">{student.studentGroup}</td>
                <td className="p-6 text-center rounded-r-xl">
                  <div className="flex justify-center gap-4">
                    <button className="py-[12px] px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#0acf83] border-[2px] bg-[#0acf83] hover:bg-transparent hover:text-[#0acf83] duration-300">
                      Одобрить
                    </button>
                    <button className="py-[12px] px-[24px] text-white rounded-full text-sm font-bold border-solid border-transparent hover:border-[#ff0000] border-[2px] bg-[#ff0000] hover:bg-transparent hover:text-[#ff0000] duration-300">
                      Отклонить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalAddStudent isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default ApplicationsPage;
