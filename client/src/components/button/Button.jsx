import React from 'react';
import { Link } from "react-router-dom";

function Button({ ButtonText, className = '', color = 'border_orange', type = "button", to }) {
    const colorClasses = {
        border_orange: 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition',
        black: 'text-[15px] text-white bg-black hover:text-black hover:bg-white border border-black transition',
        orange: 'bg-orange-400 text-white hover:bg-white hover:text-orange-400 border border-orange-400 transition',
        border_black: 'border border-black hover:!bg-black hover:!text-white transition',
    };

    const combinedClasses = `h-[40px] rounded px-6 py-1.5 mt-6 ${colorClasses[color] || colorClasses.border_orange} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {ButtonText}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses}>
            {ButtonText}
        </button>
    );
}

export default Button;
