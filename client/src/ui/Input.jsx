/* eslint-disable react/prop-types */
const Input = ({ placeholder, type }) => {
  return (
    <>
      <div className="flex flex-col max-w-[350px] w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="max-w-[350px] w-full outline-none pb-[9px] pl-[5px] text-base font-bold"
        />
        <span className=" border-solid border-[#ff8a00] border-b-[3px] w-full max-w-[350px] rounded-xl"></span>
      </div>
    </>
  );
};

export default Input;
