import React from 'react'
import modulesFrontend from '../../data/modulesFrontend'


function FrontendModules() {
    return (
        <div className="mb-8">
            <h2 className='flex justify-center text-2xl mb-8 font-semibold'>Главные модули</h2>
            <div className='w-[600px] m-auto rounded-lg p-6 items-center flex justify-center gap-28 border-2 border-orange-500'>
                {modulesFrontend.map((x) => (
                    <div key={x.name} className='flex flex-col items-center gap-4'>
                        <img className='w-20' src={x.img} alt={x.name} />
                        <p className='font-medium text-sm'>{x.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FrontendModules
