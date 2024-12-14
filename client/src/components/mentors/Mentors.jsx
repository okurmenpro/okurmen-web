const Mentors = () => {
  const mentors = [
    { name: "John Doe", category: "frontend", portrait: "../../../public/images/soke.jpg" },
    { name: "Jane Smith", category: "backend", portrait: "../../../public/images/toha.jpg" },
    { name: "Alice Johnson", category: "UX/UI", portrait: "../../../public/images/kuke.png" },
    { name: "Bob Brown", category: "Python", portrait: "../../../public/images/aidana.png" },
    { name: "Charlie Davis", category: "DevOps", portrait: "../../../public/images/charlie.jpg" },
    { name: "Eve White", category: "Data Science", portrait: "../../../public/images/eve.jpg" },
    { name: "David Green", category: "QA", portrait: "../../../public/images/david.jpg" },
    { name: "Sophia Lee", category: "Project Management", portrait: "../../../public/images/sophia.jpg" },
    { name: "Michael King", category: "Mobile Development", portrait: "../../../public/images/michael.jpg" },
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
            
            {/* Image for Mentor's Portrait */}
            <div className="relative z-10 w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] object-fit:cover md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] overflow-hidden rounded-full">
              <img
                src={mentor.portrait}
                alt={mentor.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
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
