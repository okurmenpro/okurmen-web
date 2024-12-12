import { useDispatch, useSelector } from "react-redux";
import ContainerStudents from "../../components/containerStudents/ContainerStudents";
import SearchInput from "../../ui/inputs/SearchInput";
import { useEffect, useState, useMemo } from "react";
import SideBar from "../../components/sideBar/SideBar";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalAddStudent from "../../components/modalAddStudent/ModalAddStudent";

// Temporary mock data to simulate API
const mockData = [
  { id: 1, name: "Student A", direction: "Backend", status: "Студент", level: "Internship" },
  { id: 2, name: "Student B", direction: "Frontend", status: "Выпускник", level: "Bootcamp" },
  { id: 3, name: "Student C", direction: "UX/UI", status: "Гость", level: "Internship" },
];

const StudentsPage = () => {
  const dispatch = useDispatch();
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [checkboxState, setCheckboxState] = useState({
    Backend: false,
    "UX/UI": false,
    Frontend: false,
    Гость: false,
    Студент: false,
    Выпускник: false,
    Internship: false,
    Bootcamp: false,
  });

  const [filteredData, setFilteredData] = useState(mockData);

  useEffect(() => {
    // Simulating Redux data fetch
    dispatch(() => console.log("Fetching student data (mock)"));
  }, [dispatch]);

  const handleFilter = () => {
    const selectedDirections = Object.keys(checkboxState).filter(
      (key) => checkboxState[key]
    );

    const filtered = mockData.filter((student) =>
      selectedDirections.includes(student.direction) ||
      selectedDirections.includes(student.status) ||
      selectedDirections.includes(student.level)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="container pb-[50px]">
      <SideBar
        isOpen={isBarOpen}
        setIsOpen={setIsBarOpen}
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        onFilter={handleFilter}
      />
      <div className="flex mt-[130px] items-center justify-between flex-wrap mb-[45px] gap-[20px]">
        <div className="max-w-[705px] w-full">
          <SearchInput />
        </div>
        <div className=" max-w-fit ">
          <ButtonOrange handleFunction={() => setIsModal(true)}>
            <p className="text-base text-neutral-50 font-bold">Добавить</p>
          </ButtonOrange>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start h-[90px]">
        <button onClick={() => setIsBarOpen(true)}>
          <img
            className="max-w-[37px] w-full"
            src="/public/icons/filter.svg"
            alt="filterIcon"
          />
        </button>
        <h1 className="text-2xl font-semibold">Все Студенты</h1>
      </div>
      <div className="mt-[30px]">
        <ContainerStudents data={filteredData} />
      </div>
      <ModalAddStudent isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default StudentsPage;
