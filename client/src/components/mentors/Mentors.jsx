const Mentors = () => {
  const mentors = [
    { name: "John Doe", category: "frontend" },
    { name: "Jane Smith", category: "backend" },
    { name: "Alice Johnson", category: "UX/UI" },
    { name: "Bob Brown", category: "Python" },
    { name: "Charlie Davis", category: "DevOps" },
    { name: "Eve White", category: "Data Science" },
    { name: "David Green", category: "QA" },
    { name: "Sophia Lee", category: "Project Management" },
    { name: "Michael King", category: "Mobile Development" },
  ];

  return (
    <div
      id="mentors"
      className="w-full max-w-[1258px] mx-auto flex flex-col items-start mt-[100px] mb-[70px] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2">Менторы</span>
      </h2>
      <div className="flex gap-6 overflow-x-auto no-scrollbar w-full">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[350px] bg-white shadow-md rounded-xl flex flex-col items-center justify-between text-center p-6 relative sm:w-[240px] sm:h-[300px] md:w-[220px] md:h-[280px] lg:w-[260px] lg:h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-xl shadow-inner"></div>
            <div className="relative z-10 w-[150px] h-[150px] bg-gray-200 rounded-full sm:w-[120px] sm:h-[120px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-black mb-2 sm:text-base md:text-sm lg:text-base">
                {mentor.name}
              </p>
              <p className="text-orange-500 font-medium sm:text-sm md:text-xs lg:text-sm">
                {mentor.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
