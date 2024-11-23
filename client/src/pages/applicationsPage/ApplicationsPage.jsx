import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../ui/inputs/SearchInput";
import { useEffect, useState } from "react";
import { groupStudentsSlice } from "../../redux/students/GroupStudents";
import SideBar from "../../components/sideBar/SideBar";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalAddStudent from "../../components/modalAddStudent/ModalAddStudent";
import { FaPlus } from "react-icons/fa";

const ApplicatoinsPage = () => {
  const data = useSelector((state) => state.groupStudentsReducer.data);
  const dispatch = useDispatch();
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(groupStudentsSlice());
  }, [dispatch]);

  return (
    <div className="container pb-14">
          <h1 className="text-5xl font-semibold flex align-center justify-center mb-[50px] font-medium">Заявки</h1>
      <SideBar isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
      <div className="flex justify-between items-center gap-5 flex-wrap mb-[45px]">
        <div className="max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className=" max-w-fit">
          <ButtonOrange
            handleFunction={() => {
              setIsModal(true);
            }}
          >
            <FaPlus fill="white" className="bold" />
          </ButtonOrange>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start mb-[45.5px h-[163px]">
        <button onClick={() => setIsBarOpen(true)}>
          <img
            className="max-w-[37px] w-full"
            src="/public/icons/filter.svg"
            alt="filterIcon"
          />
        </button>
      </div>
      <div className="flex flex-col justify-start  items-start gap-[26px] mt-[63px] ">
        {data?.map((student) => (
          <div
            key={student._id}
            className="flex lg:justify-between s:justify-center lg:gap-0 s:gap-y-3 items-center flex-wrap max-w-[890px] w-full  "
          >
            <div className="max-w-[545px] w-full flex items-center flex-wrap px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00] ">
              <img
                className="w-[47px] mr-[29px]"
                src="/public/images/profileImg.png"
                alt="profile"
              />
              <div className="flex justify-between flex-wrap max-w-[210px] w-full  items-center ">
                <div className="flex gap-[18px] items-center">
                  <p className="flex gap-[5px] text-xl font-semibold">
                    <span>{student.name}</span>
                    <span>{student.lastName}</span>
                  </p>
                  <p className="text-[#FF8A00] text-base font-medium text-end pt-[3px]">
                    {student.studentGroup}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-between s:justify-end items-center gap-[11px]   flex-wrap lg:max-w-[321px] s:max-w-[535px] s:w-full lg:w-full  ">
              <button className="py-[15px] px-[35px] text-white rounded-full text-base  font-bold border-solid border-transparent hover:border-[#0acf83] border-[2px] bg-[#0acf83] hover:bg-transparent hover:text-[#0acf83] duration-300">
                Одобрить
              </button>
              <button className="py-[15px] px-[35px] text-white rounded-full text-base  font-bold border-solid border-transparent hover:border-[#ff0000] border-[2px]   bg-[#ff0000] hover:bg-transparent hover:text-[#ff0000] duration-300">
                Отклонить
              </button>
            </div>
          </div>
        ))}
      </div>
      <ModalAddStudent isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default ApplicatoinsPage;
