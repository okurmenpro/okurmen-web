import React from 'react'
import { useNavigate } from 'react-router-dom'

export const WorkCard = ({ title, date, choice, id }) => {
	const navigate = useNavigate()
	return (
		<div className='bg-[#484848] py-[29px] px-[32px] w-full md:w-[670px] mt-[16px] rounded-[16px]'>
			<h2 className='font-semibold text-lg'>{title} | Семинар</h2>
			<p className='mt-4'>{date}, {choice}</p>
			<button onClick={() => navigate(`/work/${id}`)} className='px-[19px] py-[11px] bg-yellow-500 rounded-full mt-[18px]'>
				Кенениээк
			</button>
		</div>
	)
}
