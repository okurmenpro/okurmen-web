import React from "react";
import pylogo from "../../../public/images/py.png";
import jslogo from "../../../public/images/jsLogo.png";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
const FrontendBackend = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="bg-white  rounded-lg p-8 w-[1440px] flex items-start ">
        <div className="flex-1 mr-8 w-[500px]">
          <h2 className="text-6xl font-bold text-blue-800 mb-4">
            Frontend+Backend
          </h2>
          <p className="text-gray-700 mb-6 font-medium text-l my-10">
           {t ('title_course_FrontBack')}
          </p>
          <Button ButtonText={t('consultation')} />


        </div>

        <div className="flex-shrink-0 relative">
          <img
            src={jslogo}
            alt="JavaScript Logo"
            className="w-[250px] h-48 absolute top-0 left-44"
          />
          <img src={pylogo} alt="Python Logo" className="w-[380px] h mt-20" />
        </div>
      </div>
    </div>
  );
};

export default FrontendBackend;
