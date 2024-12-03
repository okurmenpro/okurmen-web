import React from "react";

const Benefits = ({ benefitsData, sectionTitle, highlightTitle, additionalText }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-6">{sectionTitle}</h2>

      <div className="max-w-4xl mb-[150px] mx-auto p-6 border-2 border-orange-400 rounded-lg justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => {
            const borderClass = index % 3 !== 1 ? "border-r" : "";
            const borderBottomClass = index < 3 ? "border-b" : "";

            const isTargetTitle = benefit.title === highlightTitle;

            return (
              <div
                key={index}
                className={`p-4 flex flex-col items-center justify-between ${borderClass} ${borderBottomClass} border-orange-300`}
              >
                <div className="mt-[-20px] flex justify-center items-center flex-grow">
                  <img src={benefit.img} alt={benefit.title} />
                </div>
                <p
                  className="text-xl text-black-950 font-medium mt-auto text-center"
                  style={isTargetTitle ? { fontWeight: "bold", paddingLeft: "300px", whiteSpace: "nowrap" } : {}}
                >
                  {benefit.title}
                </p>
              </div>
            );
          })}
        </div>
        {additionalText && (
          <div className="text-2xl text-black-950 font-medium flex justify-center align-center mt-4">
            {additionalText}
          </div>
        )}
      </div>
    </>

  );
};

export default Benefits;