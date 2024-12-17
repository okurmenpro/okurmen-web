import belek from "/images/belek.png";
import zhanara from "/images/zhanara.jpg";
import bayastanIT from "/images/bayastanIT.jpg";
import bayastanENGLISH from "/images/bayastanENGLISH.jpg";
import kutman from "/images/kutman.jpg";
import kumar from "/images/kumar.jpg";

const Trainers = () => {
  const trainers = [
    { name: "Белек Абдрашитов", category: "Backend", portrait: belek },
    { name: "Жанара", category: "English", portrait: zhanara },
    { name: "Баястан", category: "Frontend", portrait: bayastanIT },
    { name: "Баястан", category: "English", portrait: bayastanENGLISH },
    { name: "Кутман Акунов", category: "Frontend", portrait: kutman },
    { name: "Кумарбек", category: "English", portrait: kumar },
  ];

  return (
    <div
      id="mentors"
      className="w-full max-w-[1258px] mx-auto flex flex-col items-start mt-[100px] mb-[70px] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2">Тренеры</span>
      </h2>
      <div className="flex gap-6 overflow-x-auto no-scrollbar w-full">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[350px] bg-white shadow-md rounded-xl flex flex-col items-center justify-between text-center p-6 relative sm:w-[240px] sm:h-[300px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-xl shadow-inner"></div>
            <div className="relative z-10 w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] overflow-hidden rounded">
              <img
                src={trainer.portrait}
                alt={trainer.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-black mb-2 sm:text-base md:text-sm lg:text-base">
                {trainer.name}
              </p>
              <p className="text-orange-500 font-medium sm:text-sm md:text-xs lg:text-sm">
                {trainer.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
