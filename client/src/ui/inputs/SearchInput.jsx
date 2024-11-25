const SearchInput = () => {
  return (
    <div className="flex w-full">
      <div className="flex items-center  relative group w-full">
        <img
          className="absolute left-4 w-4 h-4 text-gray-400 fill-current"
          src="/public/icons/searchInput.svg"
          alt=""
        />
        <input
          type="text"
          placeholder="Поиск"
          className="w-full  pl-10 pr-4 py-[14.5px] text-[16px] font-medium text-black bg-white border-2 border-[#FF8A00] rounded-full outline-none transition-all duration-300 placeholder-gray-400"
        />
      </div>
      <div className="relative ml-[20px]">
        <button className=" p-[28.5px] ] bg-[#FF8A00] rounded-full">
          <img
            className="absolute top-[14px] left-[15px]"
            src="/public/icons/searchButton.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
