import React, { useState } from "react";
import Logo from "../../../public/images/logo.png";
import FilterIcon from "../../../public/icons/filter.svg";
import SearchInputIcon from "../../../public/icons/search.svg";
import EmptyImage from "../../../public/images/folder.png";
import { CiStar } from "react-icons/ci"; 

const TrashList = () => {
  const initialData = new Array(20).fill(null).map((_, index) => ({
    id: index,
    title: "Frontend",
    category:
      index % 3 === 0 ? "Для детей" : index % 3 === 1 ? "Курс" : "Стажировка",
    deleteDate: "31.10.2024",
    deleteTime: "10:35",
    isStarred: false,
  }));

  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleStarClick = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, isStarred: !item.isStarred }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex mb-4 justify-center lg:justify-start">
        <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
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

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={EmptyImage} alt="Empty" className=" sm:h-40 sm:w-40" />
          <p className="text-gray-500 text-lg sm:text-xl mt-4">Пусто</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="text-gray-700 text-xs sm:text-sm font-semibold">
                <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Название</th>
                <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Категория</th>
                <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Дата удаления</th>
                <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Время</th>
                <th className="p-2 sm:p-3 text-left font-medium text-zinc-950">Действия</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="bg-white rounded-lg shadow-sm my-2">
                  <td className="p-2 sm:p-3 font-medium rounded-l-lg whitespace-nowrap flex items-center">
                    <div
                      onClick={() => handleStarClick(item.id)}
                      className={`cursor-pointer transition-all duration-300 p-2 rounded-full ${item.isStarred ? 'bg-orange-100' : 'bg-transparent'} ${item.isStarred ? 'text-orange-600' : 'text-gray-300'}`}
                    >
                      <CiStar className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    {item.title}
                  </td>
                  <td className="p-2 sm:p-3 whitespace-nowrap font-medium text-zinc-950">{item.category}</td>
                  <td className="p-2 sm:p-3 whitespace-nowrap font-medium text-zinc-950">{item.deleteDate}</td>
                  <td className="p-2 sm:p-3 whitespace-nowrap font-medium text-zinc-950">{item.deleteTime}</td>
                  <td className="p-2 sm:p-3 rounded-r-lg flex space-x-2 whitespace-nowrap">
                    <button className="bg-orange-500 text-white py-1 sm:py-2 px-4 sm:px-5 rounded hover:bg-orange-600 transition duration-200 font-medium text-sm sm:text-base">
                      Восстановить
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-white border-orange-600 border border-orange-500 text-orange-500 py-1 sm:py-2 px-4 sm:px-5 rounded font-medium text-sm sm:text-base"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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
