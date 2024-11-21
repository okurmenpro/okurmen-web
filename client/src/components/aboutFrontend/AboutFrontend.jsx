import React from 'react'
import HTML from '../../../public/icons/HTML.svg'
import CSS from '../../../public/icons/CSS.svg'
import Javascript from '../../../public/icons/Javascript.svg'

function AboutFrontend() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center bg-white p-6  rounded-lg ">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-blue-700 mb-2">
                        Frontend
                    </h2>
                    <p className="text-gray-700 mb-4 my-6 font-medium text-xl">
                        Основные задачи фронтенд-разработчика — создать и настроить интерфейс, чтобы он был красивым, удобным и работал на всех устройствах. Для этого используют языки программирования HTML , CSS и JavaScript
                    </p>
                    <button className="text-orange-500 border border-orange-500 font-semibold py-2 px-4 rounded">
                        Консультация
                    </button>
                </div>
                <div className="order-last md:order-none md:w-1/2 flex justify-center p-4 hidden md:flex">
                    <div className='flex gap-6'>
                        <img src={CSS} alt="" className="w-60 max-w-full h-auto" />
                        <div className='flex flex-col gap-y-7'>
                            <img src={Javascript} alt="" className="w-72 max-w-full h-auto" />
                            <img src={HTML} alt="" className="w-60 max-w-full h-auto" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFrontend