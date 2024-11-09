// // //

// // import React from "react";
// // import TimeIcon from "../../../public/icons/time.svg";
// // import CalendarIcon from "../../../public/icons/calendar.svg";
// // import JavaLogo from "../../../public/images/java2.png";

// // const Backendpage2 = () => {
// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl flex border border-orange-200">
// //         {/* Логотип Java слева */}
// //         <img src={JavaLogo} alt="Java Logo" className="w-24 h-24 mr-6" />

// //         {/* Контент карточки */}
// //         <div>
// //           <h2 className="text-xl font-bold">Backend</h2>
// //           <p className="text-gray-500">
// //             Срок обучения: 2 месяца •{" "}
// //             <span className="text-orange-500">английский язык</span>
// //           </p>

// //           <div className="mt-4 space-y-2">
// //             <div className="flex items-center text-gray-600">
// //               <img src={TimeIcon} alt="Time Icon" className="w-5 h-5 mr-2" />4
// //               раза в неделю
// //             </div>
// //             <div className="flex items-center text-gray-600">
// //               <img
// //                 src={CalendarIcon}
// //                 alt="Calendar Icon"
// //                 className="w-5 h-5 mr-2"
// //               />
// //               Начнётся:{" "}
// //               <span className="text-orange-500">12 ноября, 2024 год</span>
// //             </div>
// //           </div>

// //           <div className="mt-4 text-gray-600">
// //             <p>Дополнительно:</p>
// //             <ul className="list-disc list-inside">
// //               <li>IT клуб</li>
// //               <li>Английский язык</li>
// //             </ul>
// //           </div>

// //           <div className="mt-6 text-right text-lg font-semibold text-gray-800">
// //             Сумма обучения: <span className="text-black">15 000 сом</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Backendpage2;

// import React from "react";
// import TimeIcon from "../../../public/icons/time.svg";
// import CalendarIcon from "../../../public/icons/calendar.svg";
// import JavaLogo from "../../../public/images/java2.png";

// const Backendpage2 = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen ">
//       <div className="bg-white  rounded-lg p-6 w-100px flex border border-orange-200">
//         {/* Логотип Java слева */}
//         <img src={JavaLogo} alt="Java Logo" className="w-60 h-70 mr-6" />

//         <div>
//           <h2 className="text-xl font-bold">Backend</h2>
//           <p className="text-gray-500">
//             Срок обучения: 2 месяца •{" "}
//             <span className="text-orange-500">английский язык</span>
//           </p>

//           <div className="mt-4 space-y-2">
//             <div className="flex items-center text-gray-600">
//               <img src={TimeIcon} alt="Time Icon" className="w-5 h-5 mr-2" />4
//               раза в неделю
//             </div>
//             <div className="flex items-center text-gray-600">
//               <img
//                 src={CalendarIcon}
//                 alt="Calendar Icon"
//                 className="w-5 h-5 mr-2"
//               />
//               Начнётся:{" "}
//               <span className="text-orange-500">12 ноября, 2024 год</span>
//             </div>
//           </div>

//           <div className="mt-4 text-gray-600">
//             <p>Дополнительно:</p>
//             <ul className="list-disc list-inside">
//               <li>IT клуб</li>
//               <li>Английский язык</li>
//             </ul>
//           </div>

//           <div className="mt-6 text-right text-lg font-semibold text-gray-800">
//             Сумма обучения: <span className="text-black">15 000 сом</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Backendpage2;

import React from "react";
import TimeIcon from "../../../public/icons/time.svg";
import CalendarIcon from "../../../public/icons/calendar.svg";
import JavaLogo from "../../../public/images/java2.png";

const Backendpage2 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg p-6  flex items-start border border-orange-200">
        {/* Логотип Java слева */}
        <img src={JavaLogo} alt="Java Logo" className="w-60 h-60 mr-6" />

        {/* Контент карточки */}
        <div className="w-[800px] h-[260px]">
          <h2 className="text-2xl font-bold mb-2">Backend</h2>
          <p className="text-gray-500 mb-4">
            Срок обучения: 2 месяца •{" "}
            <span className="text-orange-500">английский язык</span>
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <img src={TimeIcon} alt="Time Icon" className="w-5 h-5 mr-2" />4
              раза в неделю
            </div>
            <div className="flex items-center w-[270px]  rounded-lg pl-2  text-gray-600 border border-orange-500">
              <img
                src={CalendarIcon}
                alt="Calendar Icon"
                className="w-5 h-5 mr-2"
              />
              Начнётся:{" "}
              <span className="text-orange-500 ml-1">12 ноября, 2024 год</span>
            </div>
          </div>

          <div className="text-gray-600 mb-4">
            <p>Дополнительно:</p>
            <ul className="list-disc list-inside ml-4">
              <li>IT клуб</li>
              <li>Английский язык</li>
            </ul>
          </div>

          <div className="text-right text-lg font-semibold text-gray-800">
            Сумма обучения: <span className="text-black">15 000 сом</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backendpage2;
