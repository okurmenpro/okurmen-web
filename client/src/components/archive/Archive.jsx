import React, { useState } from "react";
import Logo from "../../../public/images/logo.png";
import FilterIcon from "../../../public/icons/filter.svg";
import SearchInputIcon from "../../../public/icons/search.svg";
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
    <div className="container mx-auto p-4 lg:p-6">
      <div className="flex mb-4">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <div className="flex items-center mt-5 space-x-3 mb-6">
        <div className="relative flex-grow max-w-lg">
          <input
            type="text"
            placeholder="Поиск"
            className="border-2 border-orange-500 rounded-full px-4 py-2 w-full focus:outline-none hover:border-orange-700 transition-colors duration-200"
          />
        </div>
        <button className="text-orange-600 h-10 flex items-center justify-center">
          <img src={SearchInputIcon} alt="Search" className="h-10 w-10" />
        </button>
        <button className="text-gray-500 h-10 flex items-center justify-center">
          <img src={FilterIcon} alt="Filter" className="h-9 w-9" />
        </button>
      </div>

      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase font-semibold">
              <th className="p-3 text-left border-b border-gray-300">Название</th>
              <th className="p-3 text-left border-b border-gray-300">Категория</th>
              <th className="p-3 text-left border-b border-gray-300">Дата удаления</th>
              <th className="p-3 text-left border-b border-gray-300">Время</th>
              <th className="p-3 text-left border-b border-gray-300">Действия</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm my-2"
              >
                <td className="p-3 rounded-l-lg whitespace-nowrap flex items-center relative">
                  <div
                    onClick={() => handleStarClick(item.id)}
                    className={`cursor-pointer transition-all duration-300 p-2 rounded-full ${item.isStarred ? 'bg-orange-100' : 'bg-transparent'} ${item.isStarred ? 'text-orange-600' : 'text-gray-300'}`}
                  >
                    <CiStar className={`h-5 w-5`} />
                  </div>
                  {item.title}
                </td>
                <td className="p-3 whitespace-nowrap">{item.category}</td>
                <td className="p-3 whitespace-nowrap">{item.deleteDate}</td>
                <td className="p-3 whitespace-nowrap">{item.deleteTime}</td>
                <td className="p-3 rounded-r-lg flex space-x-2 whitespace-nowrap">
                  <button className="bg-orange-500 text-white py-1 px-3 rounded-full hover:bg-orange-600 transition duration-200">
                    Восстановить
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition duration-200"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
