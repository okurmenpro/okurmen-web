import React from "react";
import Py2 from "../../../public/images/py2.png";
import Js2 from "../../../public/images/js2.png";
import Hourglass from "../../../public/icons/hourglass.svg";
import IoTime from "../../../public/icons/TTime.svg";
import { useTranslation } from "react-i18next";
const FrontendBackend2 = () => {
    const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg p-6 flex items-start border border-orange-200">
          <div className="relative">
            <img
              src={Js2}
              alt="js logo"
              className="w-[160px]  mr-16 absolute  mr-6 left-[100px] z-10  "
            />

            <img
              src={Py2}
              alt="py logo"
              className="w-60  mr-16 relative top-[40px] z-0"
            />
          </div>

          <div className="w-[800px] h-[260px]">
            <h2 className="text-2xl font-bold mb-2">Frontend + Backend</h2>
            <div class="flex items-center text-gray-600">
              <div class="mr-2">
                <img
                  src="/public/icons/calendaer.svg"
                  alt="Calendar"
                  className="w-5 h-5 ml-[2px]"
                />
              </div>
              <span>{t ('courseDuration')}</span>
              <span className="text-orange-500 ml-1">{t ('extraEnglish')}</span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <img
                  src={IoTime}
                  alt="TTime Icon"
                  className=" ml-[2px] mr-[14px]"
                />
               {t ('courseTime')}
              </div>
              <div className="flex items-center text-gray-600">
                <img src={Hourglass} alt="" className="ml-[2px] mr-[10px]" />
                {t ('lessonDuration')}
              </div>
              <div className="flex items-center w-[270px] h-[30px] rounded-2xl pl-2 text-gray-600 border border-orange-500">
                {t ('courseStart')}
                <span className="text-orange-500 ml-1">
                 {t ('courseStartDate')}
                </span>
              </div>
            </div>
            <div className="text-gray-600 mb-4">
              <p>{t ('additionally')}</p>
              <ul className="list-disc list-inside ml-4 ">
                <li>{t('itClub')}</li>
                <li>{t('englishLanguage')}</li>
              </ul>
            </div>
            <div className="text-right text-lg font-semibold text-gray-800 mt-[-20px]">
              {t ('feeAmount')} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendBackend2;
