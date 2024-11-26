/* eslint-disable react/prop-types */
const TimetableContainer = ({ data }) => {
  console.log(data);
  
  return (
    <div className=" flex gap-[6px] w-full flex-wrap">
      {data.map((item) =>
        item.day || item.date !== undefined ? (
          <>
            <div
              key={item.id}
              className="border-[1px] w-max border-solid border-[#FF8A00] rounded-[7px] py-[17px] px-[14px]"
            >
              <p className="font-bold text-base flex gap-[17px] ">
                <span>{item.day}</span>
                <span>{item.date}</span>
              </p>
            </div>
          </>
        ) : null
      )}
    </div>
  );
};

export default TimetableContainer;
