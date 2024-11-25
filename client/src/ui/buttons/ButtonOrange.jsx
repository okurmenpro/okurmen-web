/* eslint-disable react/prop-types */
const ButtonOrange = ({ children, handleFunction }) => {
  return (
    <button
      className="w-full rounded-full 
            bg-[#ff8a00] duration-100
            px-[20px] py-[20px]
          "
      onClick={() => {
        handleFunction();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
