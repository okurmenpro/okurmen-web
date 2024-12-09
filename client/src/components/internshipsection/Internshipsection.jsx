import React from "react";
import internship from "../../../public/images/internship.png";
import Button from "../button/Button";

function InternshipSection() {
  return (
    <div className="max-w-[1258px] mx-auto my-12 px-4 mt-[100px] mb-[70px]">
      <h2 className="text-xl font-bold text-black-500 border-l-4 border-orange-500 pl-2">
        Стажировка
      </h2>

      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div className="flex-1">
          <p className="mt-4 text-gray-700">
            <span className="text-lg font-semibold text-orange-500">
              Okurmen Pro
            </span>{" "}
            — отличный шанс для начинающих разработчиков попробовать свои силы в
            реальных проектах, отточить навыки программирования и научиться
            работать в команде. Программа рассчитана на 3 месяца и охватывает
            как frontend, backend, UX/UI разработку. В ходе стажировки участники
            познакомятся с современными инструментами и технологиями
            веб-разработки, получат ценные знания и опыт, а также возможность
            дальнейшего трудоустройства. По окончанию курса вы можете подать
            заявку на стажировку.
          </p>

          <Button color="orange" ButtonText="Подать заявку" />
        </div>

        <div className="flex-1">
          <div className="border-3 border-orange-500 rounded-md overflow-hidden">
            <img
              src={internship}
              alt="Team photo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipSection;
