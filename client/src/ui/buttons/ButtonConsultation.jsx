import React from 'react'
import { NavLink } from "react-router-dom";
const ButtonConsultation = () => {
  return (
    <div>
        <NavLink to={"/consultation"}>
            <button className="mt-10 text-amber-500 border-2 border-orange-500 rounded-lg text-center pt-1 pb-1 pl-4 pr-4 font-medium text-xl">
              Консультация
            </button>
          </NavLink>
    </div>
  )
}

export default ButtonConsultation