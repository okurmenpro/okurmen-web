import React from 'react'

function Button({ contentButton, className, color = 'orange' }) {
    const colorClasses = {
        orange: '',
        black: 'text-[15px] bg-black text-white !border-black hover:!bg-white hover:!text-black ',
        border_orange: ''
    };

    return (
        <div className={`h-[50px] p-2.5 mt-6 border border-orange-400 text-orange-400 rounded hover:bg-orange-400 hover:text-white transition${colorClasses[color] || colorClasses.orange} ${className}`}>
            <button>
                {contentButton}
            </button>
        </div>
    );
}

export default Button;
