/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ButtonOrange from "../../ui/buttons/ButtonOrange";
import ModalInput from "../../ui/inputs/ModalInput";
import Modal from "../../ui/Modal";
import { MdClose } from "react-icons/md";

const ModalAddStudent = ({ isModal, setIsModal, addStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    studentGroup: "",
    email: "",
    phone: "",
    payment: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Имя обязательно";
    if (!formData.lastName) newErrors.lastName = "Фамилия обязательна";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Некорректный e-mail";
    if (formData.phone && formData.phone.length < 10)
      newErrors.phone = "Телефон должен содержать минимум 10 символов";
    if (!formData.payment) newErrors.payment = "Сумма выплаты обязательна";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const newStudent = { ...formData, _id: Date.now().toString() };
      addStudent(newStudent); // Добавление нового студента в общий список
      setFormData({
        name: "",
        lastName: "",
        studentGroup: "",
        email: "",
        phone: "",
        payment: "",
      });
      setIsModal(false); // Закрытие модального окна
    }
  };

  if (!isModal) return null;

  return (
    <Modal isOpen={isModal}>
      <div className="max-w-[935px] w-full p-8 bg-white rounded-[5px] m-[20px]">
        <div className="flex align-center justify-between">
          <p className="text-bold text-3xl font-medium">Добавить студента</p>
          <button onClick={() => setIsModal(false)}>
            <MdClose size={35} />
          </button>
        </div>
        <form className="flex flex-col justify-start mt-[57px]" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between w-full items-center gap-[10px]">
            <ModalInput
              placeholder="Имя"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <ModalInput
              placeholder="Фамилия"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            <input
              placeholder="Направление"
              list="group"
              name="studentGroup"
              value={formData.studentGroup}
              onChange={handleInputChange}
              className={errors.studentGroup ? "border-red-500" : ""}
            />
            <datalist id="group">
              <option value="Frontend" />
              <option value="Backend" />
              <option value="UX/UI" />
              <option value="Internship" />
              <option value="Bootcamp" />
              <option value="Kids" />
            </datalist>
            {errors.studentGroup && (
              <p className="text-red-500 text-sm">{errors.studentGroup}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-[30px] mt-[67px]">
            <ModalInput
              placeholder="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <ModalInput
              placeholder="Номер Телефон"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="flex justify-start mt-[77px]">
            <ModalInput
              placeholder="Сумма выплаты"
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleInputChange}
              className={errors.payment ? "border-red-500" : ""}
            />
            {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}
          </div>
          <div className="flex justify-end mt-[28px]">
            <ButtonOrange>
              <button type="submit" className="text-base font-medium">
                Сохранить
              </button>
            </ButtonOrange>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddStudent;
