import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsTrash as Trash } from "react-icons/bs";
import { RiErrorWarningLine as Warn } from "react-icons/ri";

const ContainerStudents = ({ data = [] }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 8;

  const totalStudents = data.length;
  const totalPages = Math.ceil(totalStudents / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = data.slice(startIndex, startIndex + studentsPerPage);

  const [showModal, setShowModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const reasons = [
    "Ошибка данных",
    "Не хватает информации",
    "Неверный ввод",
    "Техническая проблема",
    "Другие причины",
  ];

  const handleModalOpen = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    setSelectedReason("");
    setMessageInput("");
  };

  const toggleReasonSelection = (reason) => {
    if (selectedReason === reason) {
      setSelectedReason("");
      setMessageInput("");
    } else {
      setSelectedReason(reason);
      setMessageInput("");
    }
  };

  const handleSubmit = () => {
    if (selectedReason === "Другие причины") {
      if (messageInput.trim() !== "") {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          handleModalClose();
        }, 1000);
      } else {
        alert("Ошибка! Пожалуйста, напишите сообщение.");
      }
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        handleModalClose();
      }, 1000);
    }
  };

  const isButtonDisabled =
    (selectedReason === "" && messageInput.trim() === "") ||
    (selectedReason === "Другие причины" && messageInput.trim() === "");

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-[26px] justify-between">
        {currentStudents.map((student) => (
          <div
            key={student._id}
            className="max-w-[545px] w-full flex items-center px-3 py-[10px] rounded-3xl border border-solid border-[#FF8A00]"
          >
            <img
              className="w-[47px] mr-[29px]"
              src="/public/images/profileImg.png"
              alt="profile"
            />
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <p className="text-[#FF8A00] text-base font-medium">
                  {student.studentGroup}
                </p>
                <p className="flex gap-[5px] text-xl font-semibold">
                  <span>{student.name}</span>
                  <span>{student.lastName}</span>
                </p>
              </div>
              <div className="flex items-center justify-end gap-[10px]">
                <button
                  onClick={handleModalOpen}
                  className="text-orange-500 hover:text-orange-700"
                >
                  <Warn size={30} fill="orange" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={27} fill="red" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={handleBackgroundClick}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-left transition-all duration-300 ease-in-out w-[536px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-3 text-gray-700 ml-2">
              Причина предупреждения:
            </h2>

            <div className="mb-3 ml-[3px]">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className={`flex items-center gap-2 mb-2 cursor-pointer text-xl  ${
                    selectedReason === reason
                      ? "text-[#FF8A00]"
                      : "text-gray-600"
                  } hover:text-[#FF8A00]`}
                  onClick={() => toggleReasonSelection(reason)}
                >
                  <input
                    type="radio"
                    id={reason}
                    name="reason"
                    checked={selectedReason === reason}
                    readOnly
                    className="w-4 h-4"
                  />
                  <label htmlFor={reason}>{reason}</label>
                </div>
              ))}
            </div>

            {selectedReason === "Другие причины" && (
              <div className="border p-2 rounded-md w-full mb-3 text-sm">
                <textarea
                  className="w-full h-[100px]"
                  placeholder="Напишите ваше сообщение..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  style={{ resize: "none" }}
                />
              </div>
            )}

            <div className="flex justify-between gap-4 mt-[80px]">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 w-1/2"
              >
                Закрыть
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 bg-[#FF8A00] text-white rounded hover:bg-[#e07b00] ${
                  isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                } w-1/2`}
                disabled={isButtonDisabled}
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all duration-300 ease-in-out opacity-100 animate-fadeOut">
          Отправлено!
        </div>
      )}
    </div>
  );
};

export default ContainerStudents;
