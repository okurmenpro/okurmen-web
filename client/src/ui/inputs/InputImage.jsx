/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const InputImage = ({ onChange, isUpdate }) => {
  const [image, setImage] = useState(localStorage.getItem("photo"));
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
      onChange(event);
    }
  };

  return (
    <div className={`max-w-[124px] w-full h-[124px] relative self-center `}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      {isUpdate ? (
        <>
          <button
            onClick={handleButtonClick}
            className="absolute top-[30%] right-[30%]"
          >
            <img src="/public/icons/camera.svg" alt="icon" />
          </button>
        </>
      ) : null}
      <img
        className={`max-w-[124px] w-full  h-[124px] mb-[9px] self-center  rounded-full object-fill   bg-center bg-no-repeat `}
        src={
          !image
            ? "/public/images/profileImg.png"
            : image
        }
      />
    </div>
  );
};

export default InputImage;
