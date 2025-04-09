import React from "react";
import Hourglass from "../../../public/icons/hourglass.svg";
import Time from "../../../public/icons/TTime.svg";
import calendar from "../../../public/icons/calendaer.svg";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";
const PriseCourse = ({
    
    title,
    image,
    duration,
    englishIncluded,
    frequency,
    startDate,
    additional,
    price,
    time,
}) => {
    const { t } = useTranslation();
    return (
        <div className="flex mt-[60px] justify-center items-center min-h-screen mb-[-100px] px-4 sm:px-6 md:px-8">
            <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-start border border-orange-200 w-full md:w-[1110px]">
                <img
                    src={image}
                    alt={`${title} logo`}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mx-auto md:mt-[50px] md:ml-8 md:mr-10"
                />
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 font-medium">
                        {title}
                    </h2>
                    <p className="flex gap-2 mb-2 font-medium text-sm sm:text-base">
                        <img src={Time} alt="" />
                       {t('courseDuration')} {duration}
                        {englishIncluded && (
                            <span className="text-orange-500">{t('extraEnglish')}</span>
                        )}
                    </p>
                    <div className="space-y-4 mb-6">
                        {frequency && (
                            <div className="flex gap-1 items-center text-black-600 font-medium text-sm sm:text-base">
                                <img src={calendar} alt="" />
                               {t('courseTime')}
                            </div>
                        )}
                        {time && (
                            <div className="flex gap-2 items-center text-black font-medium text-sm sm:text-base">
                                <img src={Hourglass} alt="" />
                                {t ('lessonDuration')}
                            </div>
                        )}
                        <div className="flex font-normal text-sm sm:text-base items-center rounded-full p-[5px] ps-4 pl-2 text-black border border-orange-500 w-full sm:w-auto">
                            {t('courseStart')}
                            <span className="text-orange-500 ml-1">{t ('courseStartDate')}</span>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col sm:flex-row">
                        <div className="text-black font-medium text-sm sm:text-base mb-6">
                            <p>{t ('additionally')}</p>
                            <ul className="list-disc list-inside ml-4">
                                {additional.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-right text-sm sm:text-base font-semibold text-gray-800 sm:ml-4">
                            <p className="mb-4"> <span className="text-black">{t ('feeAmount')}</span></p>
                            <div className="text-right mt-8 sm:mt-0">
                                <Button
                                ButtonText={t('consultation')}                               
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PriseCourse;
