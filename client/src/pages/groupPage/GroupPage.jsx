import { useParams } from "react-router-dom";
import SearchInput from "../../ui/inputs/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { groupStudentsSlice } from "../../redux/students/GroupStudents";
import ContainerStudents from "../../components/containerStudents/ContainerStudents";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalAddStudent from "../../components/modalAddStudent/ModalAddStudent";

const GroupPage = () => {
  const id = useParams().id;
  const data = useSelector((state) => state.groupStudentsReducer.data);
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(groupStudentsSlice());
  }, [dispatch]);

  return (
    <div className="container pb-[50px]">
      <div className="flex  items-center justify-between flex-wrap lg:gap-[10px] gap-[20px]  mb-[60px]">
        <div className="max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className=" max-w-fit ">
          <ButtonOrange
            handleFunction={() => {
              setIsModal(true);
            }}
          >
            <p className="text-base font-bold">Добавить</p>
          </ButtonOrange>
        </div>
      </div>
      <div className="ml-[30px] mb-[65px]">
        <h1 className="lg:text-[40px] md:text-4xl sm:text-3xl xs:text-2xl s:text-xl  font-bold mb-[51px] ">
          {id} -группа <span className="text-[#FF8a00]">Frontend</span>
        </h1>
        <div className="flex flex-col lg:text-xl md:text-lg sm:text-base xs:text-sm s:text-xs font-bold   ">
          <p className="max-w-[370px] w-full pb-[5px] border-b border-solid border-[#FF8a00] ">
            Преподаватель :<span className="text-[#FF8a00] ">name</span>
          </p>
          <p className="max-w-[370px] w-full  pb-[5px] border-b border-solid border-[#FF8a00]">
            Количество учеников :<span className="text-[#FF8a00] ">num</span>
          </p>
        </div>
      </div>
      <div className="mt-[70px]">
        <ContainerStudents data={data} />
      </div>
      <ModalAddStudent isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default GroupPage;
