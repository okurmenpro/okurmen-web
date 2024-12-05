import React from "react";
import Hourglass from "../../../public/icons/hourglass.svg";
import Time from "../../../public/icons/TTime.svg";
import calendar from '../../../public/icons/calendaer.svg'
import Button from "../button/Button";

const PriseCourse = ({
    title,
    image,
    duration,
    englishIncluded,
    frequency,
    startDate,
    additional,
    price,
    time
}) => {
    return (
        <div className="flex justify-center items-center min-h-screen mb-[-200px]">
            <div className="bg-white  rounded-lg p-6 flex items-start border border-orange-200">
                <img src={image} alt={`${title} logo`} className="w-40 object-contain h-40 mt-[50px] ml-8 mr-10" />
                <div className="w-[800px] h-[260px]">
                    <h2 className="text-3xl mb-4 font-medium mb-2">{title}</h2>
                    <p className="flex gap-2 mb-1 font-medium text-sm">
                        <img src={Time} alt="" />

                        Срок обучения: {duration} •{" "}
                        {englishIncluded && (
                            <span className="text-orange-500">английский язык</span>
                        )}
                    </p>
                    <div className="space-y-2 mb-4">
                        {frequency && (
                            <div className="flex gap-1 items-center text-black-600 font-medium text-sm">
                                <img src={calendar} alt="" />
                                4 раза в неделю
                            </div>
                        )}

                        {time && (
                            <div className="flex gap-2 items-center text-black font-medium text-sm">
                                <img src={Hourglass} alt="" />
                                1,5 часа
                            </div>
                        )}
                        <div className="flex font-normal text-base items-center w-[270px] rounded-full p-[5px] ps-4 pl-2 text-black border border-orange-500">
                            Начнётся:{" "}
                            <span className="text-orange-500 ml-1">{startDate}</span>
                        </div>
                    </div>
                    <div className="text-balk font-medium text-sm mb-4">
                        <p>Дополнительно:</p>
                        <ul className="list-disc list-inside ml-4">
                            {additional.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-right mt-[-90px] mb-4 text-lg font-semibold text-gray-800">
                        Сумма обучения: <span className="text-black">{price}</span>
                    </div>
                    <div className="text-right text-lg ">
                        <Button
                        contentButton="Консультация"
                        className={`ml-[650px] w-[130px]`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriseCourse;
