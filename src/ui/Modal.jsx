/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = isOpen && (
    <div className="fixed top-[0px] left-0 w-full h-full flex justify-center items-center  z-50 bg-[rgba(2,2,2,0.695)]">
      <div className="flex justify-around items-center w-full h-full gap-3 rounded-[5px]">
        {children}
      </div>
    </div>
  );

  if (!isBrowser) return null;

  const portalRoot = document.getElementById("portal_root");

  return portalRoot ? ReactDOM.createPortal(modalContent, portalRoot) : null;
};

export default Modal;
