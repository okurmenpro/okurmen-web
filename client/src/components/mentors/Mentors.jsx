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
    <div id="mentors" className="w-full max-w-[1258px] mx-auto flex flex-col items-start mt-[100px] mb-[70px]">
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2">Менторы</span>
      </h2>
      <div className="flex gap-6 overflow-x-auto no-scrollbar w-full">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] h-[350px] bg-white shadow-md rounded-xl flex flex-col items-center justify-between text-center p-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 rounded-xl shadow-inner"></div>
            <div className="relative z-10 w-[150px] h-[150px] bg-gray-200 rounded-full"></div>
            <div className="relative z-10">
              <p className="text-lg font-medium text-black mb-2">
                {mentor.name}
              </p>
              <p className="text-orange-500 font-medium">{mentor.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
