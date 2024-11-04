/* eslint-disable react/prop-types */
const ButtonOrange = ({ children, handleFunction }) => {
  return (
    <button
      className="s:px-[40px] s:py-[8px] s:text-[14px] sm:px-[50px] sm:py-[8px] md:px-[40px] md:py-[20px]  w-full rounded-full lg:py-[20px]
            bg-[#ff8a00] text-white font-bold lg:text-[20px] duration-100
          "
      type="submit"
      onClick={() => {
        handleFunction();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
