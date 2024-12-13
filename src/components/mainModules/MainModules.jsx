import React from "react";

const MainModules = ({ data, title }) => {
  return (
    <>
      <div className="container flex justify-center items-center mb-20">
        <p className="text-black font-medium text-4xl mb-5">{title}</p>
      </div>
      <div className="flex justify-center items-center mb-20">
        <div className="border border-orange-500 rounded-2xl inline-block p-6 border-2">
          <div className="flex justify-center px-[50px] py-[20px]  items-center gap-20">
            {data.map((module, index) => (
              <div key={index} className="text-center">
                <img
                  src={module.img}
                  alt={module.title}
                  className="mx-auto w-[70px] h-[70px]"
                />
                <p className="text-slate-950 font-bold text-base mt-4">{module.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainModules;
