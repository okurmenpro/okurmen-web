/* eslint-disable react/prop-types */

const ModalInput = ({ placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="text-sm font-bold max-w-[268px] w-full py-[10px] px-[22px] border-solid border-[1px] border-[#FF8A00] rounded-[14px] outline-none "
      />
    </>
  );
};

export default ModalInput;
