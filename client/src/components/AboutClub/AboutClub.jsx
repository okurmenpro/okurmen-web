import React from "react";
import cup from "../../../public/images/cup.png";
import computerClub from "../../../public/images/computerClub.png";
import star from "../../../public/images/star.png";

function AboutClub() {
  return (
    <div id="itclub" className="w-full max-w-[1258px] mx-auto py-10 px-4">
      <h2 className="text-lg font-medium mb-6">
        <span className="border-l-4 border-orange-500 pl-2 h-[33.5px] flex items-center">
          IT-клуб
        </span>
      </h2>
      <p className="text-lg text-gray-800 mt-4 mb-[100px]">
        <span className="text-orange-500 font-medium">IT-клуб</span> — это
        сообщество или группа, где люди, интересующиеся технологиями,
        программированием, дизайном и другими IT-направлениями, собираются,
        чтобы учиться, обмениваться опытом, работать над проектами и развивать
        навыки. В клубе обычно проходят обсуждения, мастер-классы, конкурсы, и
        создаются проекты, что позволяет участникам вместе расти и обучаться в
        неформальной обстановке.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full mx-auto">
        <div className="text-center">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={cup}
              alt="Education Icon"
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            Чтобы вступить в IT-клуб, <br /> необходимо{" "}
            <span className="text-orange-500 font-medium">хорошо учиться</span>{" "}
            в <br /> выбранном вами направлении.
          </p>
        </div>

        <div className="text-center">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={computerClub}
              alt="Real Projects Icon"
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            Наша задача, чтобы лучшие <br /> ученики работали{" "}
            <span className="text-orange-500 font-medium">
              над реальными <br /> проектами,
            </span>{" "}
            чтобы будущем <br /> устроится в компанию
          </p>
        </div>

        <div className="text-center sm:col-span-2 lg:col-span-1">
          <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
            <img
              src={star}
              alt="IT Company Icon"
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 text-base mt-[20px]">
            Тут проходят экскурсии по <br /> разным IT-компаниям и <br />{" "}
            встречи с опытными разработчиками.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutClub;
