/* eslint-disable react/prop-types */
const ButtonOrange = ({ children, handleFunction, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full rounded-[7px] 
             duration-100
            px-[20px] py-[15px] ${
              disabled ? "bg-[#D9D9D9]" : "bg-[#ff8a00]"
            }  `}
      onClick={() => {
        handleFunction();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
