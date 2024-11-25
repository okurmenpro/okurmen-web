/* eslint-disable react/prop-types */

import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalInput from "../../ui/inputs/ModalInput";
import Modal from "../../ui/Modal";
import { MdClose } from "react-icons/md";

const ModalAddStudent = ({ isModal, setIsModal }) => {
  return (
    <Modal isOpen={isModal}>
      <div className="max-w-[935px] w-full p-8 bg-white rounded-[5px] m-[20px]">
        <div className="flex align-center justify-start gap-8 ">

        <button onClick={() => setIsModal(false)}>
          <span >
            <MdClose size={35}  />
          </span>
        </button>
        <p className="text-medium text-xl bold">добавиться</p>
        </div>
        
        <form className="flex flex-col justify-start mt-[57px] ">
          <div className="flex flex-wrap  justify-between w-full items-center gap-[10px]">
            <ModalInput placeholder={"Имя"} type={"text"} />
            <ModalInput placeholder={"Фамилия"} type={"text"} />
            <input
              placeholder="Направление"
              list="group"
              className="text-sm font-bold max-w-[268px] w-full py-[10px] px-[22px] border-solid border-[1px] border-[#FF8A00] rounded-[14px] outline-none "
            />
            <datalist id="group">
              <option value="Frontend"></option>
              <option value="Backend"></option>
              <option value="UX/UI"></option>
              <option value="Internship"></option>
              <option value="Bootcamp"></option>
              <option value="Kids"></option>
            </datalist>
          </div>
          <div className="flex flex-wrap items-center gap-[30px] mt-[67px]">
            <ModalInput placeholder={"e-mail"} type={"email"} />
            <ModalInput placeholder={"Номер Телефон"} type={"text"} />
          </div>
          <div className="flex justify-start mt-[77px]">
            <ModalInput placeholder={"сумма выплаты"} type={"text"} />
          </div>
          <div className="flex justify-end   mt-[28px] ">
            <div className="max-w-[203px] w-full">
              <ButtonOrange
                handleFunction={() => {
                  setIsModal(false);
                }}
              >
                <p className="text-base font-medium">Сохранить</p>
              </ButtonOrange>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddStudent;
