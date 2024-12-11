import React, { useState } from "react";
import Logo from "../../../public/images/logo.png";
import FilterIcon from "../../../public/icons/filter.svg";
import SearchInputIcon from "../../../public/icons/search.svg";
import EmptyImage from "../../../public/images/folder.png";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import Button from "../button/Button";

const TrashList = () => {
  const itemsPerPage = 20;

  const initialDataTable1 = new Array(50).fill(null).map((_, index) => ({
    id: index,
    title: "Frontend",
    category:
      index % 3 === 0 ? "Для детей" : index % 3 === 1 ? "Курс" : "Стажировка",
    deleteDate: "31.10.2024",
    deleteTime: "10:35",
    isStarred: false,
  }));

  const initialDataTable2 = new Array(50).fill(null).map((_, index) => ({
    id: index,
    name: `${index} Баланчаева Баланча `,
    course: index % 2 === 0 ? "Frontend" : "Backend",
    enrollmentDate: "15.11.2023",
    status: index % 2 === 0 ? "Активен" : "Завершен",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [currentTable, setCurrentTable] = useState(1);
  const [data, setData] = useState(initialDataTable1);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleStarClick = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isStarred: !item.isStarred } : item
      )
    );
  };

  const switchTable = (tableNumber) => {
    if (tableNumber === 1) {
      setData(initialDataTable1);
    } else {
      setData(initialDataTable2);
    }
    setCurrentTable(tableNumber);
    setCurrentPage(1); 
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex mb-4 justify-center lg:justify-start">
        <NavLink to={'/'}>
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
        </NavLink>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-5 space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
        <div className="relative flex-grow max-w-lg w-full">
          <input
            type="text"
            placeholder="Поиск"
            className="border-2 border-orange-500 rounded-full px-4 py-2 w-full focus:outline-none hover:border-orange-700 transition-colors duration-200"
          />
        </div>
        <button className="text-orange-600 h-10 flex items-center justify-center">
          <img src={SearchInputIcon} alt="Search" className="h-8 w-8 sm:h-10 sm:w-10" />
        </button>
        <button className="text-gray-500 h-10 flex items-center justify-center">
          <img src={FilterIcon} alt="Filter" className="h-8 w-8 sm:h-9 sm:w-9" />
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => switchTable(1)}
          className={`py-2 px-4 rounded ${currentTable === 1 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          Курсы
        </button>
        <button
          onClick={() => switchTable(2)}
          className={`py-2 px-4 rounded ${currentTable === 2 ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          Студенты
        </button>
      </div>

      {currentData.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-[200px]">
          <img src={EmptyImage} alt="Empty" className="sm:h-40 sm:w-40" />
          <p className="text-gray-500 text-lg sm:text-xl mt-4">Пусто</p>
        </div>
      ) : (
        <div>
          <div className="h-auto border rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="sticky top-0 bg-white">
                <tr className="text-gray-700 text-xs sm:text-sm font-semibold">
                  {currentTable === 1 ? (
                    <>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Название</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Категория</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Дата удаления</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Время</th>
                    </>
                  ) : (
                    <>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Ф.И</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Направление</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Поступление</th>
                      <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Выпуск</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="p-2 sm:p-3 font-medium flex items-center">
                      <div
                        onClick={() => handleStarClick(item.id)}
                        className={`cursor-pointer transition-all duration-300 p-2 rounded-full ${item.isStarred ? "bg-orange-100" : "bg-transparent"} ${item.isStarred ? "text-orange-600" : "text-gray-300"}`}
                      >
                        <CiStar className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      {currentTable === 1 ? item.title : item.name}
                    </td>
                    {currentTable === 1 ? (
                      <>
                        <td className="p-2 sm:p-3">{item.category}</td>
                        <td className="p-2 sm:p-3">{item.deleteDate}</td>
                        <td className="p-2 sm:p-3">{item.deleteTime}</td>
                      </>
                    ) : (
                      <>
                        <td className="p-2 sm:p-3">{item.course}</td>
                        <td className="p-2 sm:p-3">{item.enrollmentDate}</td>
                        <td className="p-2 sm:p-3">{item.status}</td>
                      </>
                    )}
                    <td className="p-2 sm:p-3 flex space-x-2">
                      <Button ButtonText='Восстановить' className="bg-orange-500 border-none text-white" />
                      <Button onClick={() => handleDelete(item.id)} ButtonText='Удалить' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Назад
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

const Archive = () => {
  return (
    <div>
      <TrashList />
    </div>
  );
};

export default Archive;
