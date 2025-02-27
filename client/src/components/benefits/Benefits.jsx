import React from "react";

const Benefits = ({ benefitsData, sectionTitle, highlightTitle, additionalText }) => {
  return (
    <>
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">{sectionTitle}</h2>

      <div className="max-w-4xl mb-[100px] mx-auto sm:p-6 border-2 border-orange-400 rounded-lg justify-center">
        <div className="grid gap-4">
          {/* Row 1: Single large image */}
          {benefitsData[0] && (
            <div className="flex justify-center items-center">
              <div className="p-4 flex flex-col items-center">
                <img
                  src={benefitsData[0].img}
                  alt={benefitsData[0].title}
                  className="w-full max-w-[300px] sm:max-w-[250px] h-auto object-contain"
                />
                <p className="text-center text-lg sm:text-xl font-medium mt-2">
                  {benefitsData[0].title}
                </p>
              </div>
            </div>
          )}
          <hr className="border-t-1 border-orange-400 my-6" />

          {/* Row 2: Two smaller images with a single shared title */}
          <div>
            <div className="flex justify-center gap-4">
              {benefitsData.slice(1, 3).map((benefit, index) => (
                <div key={index} className="p-4 flex flex-col items-center">
                  <img
                    src={benefit.img}
                    alt={benefit.title || ""}
                    className={`w-full max-w-[150px] sm:max-w-[120px] h-auto object-contain ${index === 0 ? 'mt-12' : ''}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm sm:text-base font-medium mt-2">
              {benefitsData[1]?.title}
            </p>
          </div>
          <hr className="border-t-1 border-orange-400 my-6" />

          {/* Row 3: Three smaller images */}
          <div className="grid grid-cols-3 gap-4">
            {benefitsData.slice(3, 6).map((benefit, index) => (
              <div key={index} className="p-4 flex flex-col items-center">
                <img
                  src={benefit.img}
                  alt={benefit.title || ""}
                  className="w-full max-w-[120px] sm:max-w-[100px] h-auto object-contain"
                />
                <p className="text-center text-sm sm:text-base font-medium mt-2">
                  {benefit.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {additionalText && (
          <div className="text-lg sm:text-2xl text-black-950 font-medium flex justify-center items-center mt-4 text-center">
            {additionalText}
          </div>
        )}
      </div>
    </>
  );
};

export default Benefits;
