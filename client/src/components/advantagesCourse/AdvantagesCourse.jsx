import React from "react";

const AdvantagesCourse = ({ data, title }) => {
  return (
    <div className="max-w-full md:w-[700px] h-auto mx-auto text-center mb-[100px] mt-[50px] px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border border-orange-300 rounded-lg">
        {data.map((advantage, index) => {
          const borderClass =
            index % 3 !== 2 && index < data.length - 1 ? "md:border-r" : "";
          const borderBottomClass = index < data.length - 3 ? "border-b" : "";

          return (
            <div
              key={index}
              className={`p-4 flex flex-col items-center justify-center ${borderClass} ${borderBottomClass} border-orange-300`}
            >
              <div
                className="text-orange-500 text-4xl sm:text-5xl mb-4"
                style={{ width: advantage.width, height: advantage.height }}
              >
                <img src={advantage.img} alt={advantage.title} />
              </div>
              <h3 className="font-semibold mb-2 text-base sm:text-lg" style={{ maxWidth: "182px" }}>
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base" style={{ maxWidth: "182px" }}>
                {advantage.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvantagesCourse;
