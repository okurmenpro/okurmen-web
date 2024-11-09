import { useDispatch, useSelector } from "react-redux";
import ContainerStudents from "../../components/containerStudents/ContainerStudents";
import ButtonOrange from "../../ui/ButtonOrange";
import SearchInput from "../../ui/inputs/SearchInput";
import { useEffect, useState } from "react";
import { groupStudentsSlice } from "../../redux/students/GroupStudents";
import SideBar from "../../components/sideBar/SideBar";

const StudentsPage = () => {
  const data = useSelector((state) => state.groupStudentsReducer.data);
  const dispatch = useDispatch();
  const [isBarOpen, setIsBarOpen] = useState(false);

  useEffect(() => {
    dispatch(groupStudentsSlice());
  }, [dispatch]);
  return (
    <div className="container pb-[50px]">
      <SideBar isOpen={isBarOpen} setIsOpen={setIsBarOpen} />
      <div className="flex  items-center justify-between flex-wrap mb-[45px] gap-[20px]">
        <div className="max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className=" max-w-fit ">
          <ButtonOrange handleFunction={() => {}}>
            <p className="text-base font-bold">Добавить</p>
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
        <h1 className="text-2xl font-semibold">Все Студенты</h1>
      </div>
      <div className="mt-[77px]">
        <ContainerStudents data={data} />
      </div>
    </div>
  );
};

export default StudentsPage;
