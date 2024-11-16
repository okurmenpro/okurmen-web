import React from "react";
import advantages from "../../data/advantages";

const CourseAdvantages = () => {
  return (
    <div className="w-[700px] h-[600px] mx-auto text-center mb-[300px] mt-[-180px]">
      <h2 className="text-3xl font-bold mb-8">Преимущества курса</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-0">
        {advantages.map((advantage, index) => {
          const borderClass = index % 3 !== 2 ? "border-r" : "";
          const borderBottomClass = index < 3 ? "border-b" : "";

          return (
            <div
              key={index}
              className={`p-4 flex flex-col items-center justify-center ${borderClass} ${borderBottomClass} border-orange-300`}
            >
              <div
                className="text-orange-500 text-5xl mb-4"
                style={{ width: advantage.width, height: advantage.height }}
              >
                <img src={advantage.img} alt={advantage.title} />
              </div>
              <h3
                className="font-semibold mb-2 text-lg"
                style={{ width: "182px" }}
              >
                {advantage.title}
              </h3>
              <p style={{ width: "182px" }}>{advantage.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseAdvantages;
