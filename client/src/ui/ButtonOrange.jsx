/* eslint-disable react/prop-types */
const ButtonOrange = ({ children, handleFunction }) => {
  return (
    <button
      className="s:text-[14px] w-full rounded-full 
            bg-[#ff8a00] text-white font-bold lg:text-[20px] duration-100
            px-[30px] py-[10px]
            sm:px-[45px] sm:py-[20px] xs:px-[35px] xs:py-[15px] s:px-[30px] s:py-[10px]
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
