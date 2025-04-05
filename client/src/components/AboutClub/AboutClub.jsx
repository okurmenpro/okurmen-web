import React from "react";
import cup from "../../../public/images/cup.png";
import computerClub from "../../../public/images/computerClub.png";
import star from "../../../public/images/star.png";
import { useTranslation } from "react-i18next";

function AboutClub() {
  const { t } = useTranslation();
  return (
    <div id="itclub" className="w-full font-ubuntu max-w-[1258px] mx-auto py-10 px-4">
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2 h-[33.5px] flex items-center">
          {t('itClub')}
        </span>
      </h2>
      <p className="text-lg text-gray-800 mt-4 mb-[100px]">
        <span className="text-orange-500 font-medium">{t('itClub')}</span> {t('aboutClub')} </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full mx-auto">
        <div className="text-center">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={cup}
              alt={t("educationIcon")}
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            {t("itClubRequirement")} <br />
            {t("necessary")} <span className="text-orange-500 font-medium">{t("studyWell")}</span> <br />
            {t("inDirection")}
          </p>
        </div>

        <div className="text-center">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={computerClub}
              alt={t("realProjectsIcon")}
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            {t("ourTask")} <br />
            <span className="text-orange-500 font-medium">{t("workOnProjects")}</span>, <br />
            {t("toGetJob")}
          </p>
        </div>

        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={star}
              alt={t("itCompanyIcon")}
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            {t("companyTours")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutClub;
