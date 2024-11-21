import React from "react";
import benefits from "../../data/benefits";

const Benefits = () => {
  return (
    <div className="max-w-4xl mb-[150px] mx-auto p-6 border-2 border-orange-400 rounded-lg justify-center">
      <h2 className="text-center text-2xl font-bold mb-6">Главные модули</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const borderClass = index % 3 !== 1 ? "border-r" : "";
          const borderBottomClass = index < 3 ? "border-b" : "";

          return (
            <div
              key={index}
              className={`p-4 flex flex-col items-center justify-between ${borderClass} ${borderBottomClass} border-orange-300`}
            >
              <div
                className="mb-4 flex justify-center items-center flex-grow"
                style={{ width: benefit.width, height: benefit.height }}
              >
                <img src={benefit.img} alt={benefit.title} />
              </div>
              <p className="text-xl text-black-950 font-medium mt-auto">
                {benefit.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-2xl text-black-950 font-medium flex justify-center align-center mt-4">
        Машинное обучение
      </div>
    </div>
  );
};

export default Benefits;
