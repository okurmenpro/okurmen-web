/* eslint-disable react/prop-types */
import { TbAntennaBars5 } from 'react-icons/tb';

const CompanyBlock = ({ category, title }) => {
	return (
		<div className='bg-black rounded-3xl w-full h-full py-[30px] px-[48px] text-white'>
			<div className='py-1 px-1 text-[#8F8F8F] flex items-center gap-1 border-2 border-gray-600 w-[120px] rounded-xl'>
				<TbAntennaBars5 className='text-base' />
				<span>{category}</span>
			</div>
			<div className='block md:flex items-center justify-between gap-3 mt-3'>
				<h1 className='text-3xl md:text-6xl font-semibold'>{title}</h1>
				<p className='text-base text-[#D1D1D1] font-medium mt-2  md:w-[534px]'>
				Биздин миссия - окуучуларга it ни гана эмес, туура таалим тарбия да берүү
				</p>
			</div>

			<div className='block md:flex justify-between px-5 border-2 border-gray-400 mt-[30px] md:mt-[74px] rounded-[16px]'>
				<div className='flex flex-col justify-center items-center px-[39px] py-6'>
					<img src='/public/images/sapaty.png' alt='' />
					<p className='text-[#8F8F8F] mt-2'>Сапаты боюнча</p>
					<h2 className='text-2xl md:text-4xl text-yellow-500 font-semibold mt-2 '>
						ТОП 5 ке кирет
					</h2>
				</div>
				<div className='flex flex-col justify-center items-center px-[39px] py-6 border-t md:border-0'>
					<img src='/public/images/yigilik.png' alt='' />
					<p className='text-[#8F8F8F] mt-2'>Ийгиликтүү бүтүрүүчүлөр</p>
					<h2 className='text-2xl md:text-4xl text-yellow-500 font-semibold mt-2 '>200+</h2>
				</div>
				<div className='flex flex-col justify-center items-center px-[39px] py-6 border-t md:border-0'>
					<img src='/public/images/practica.png' alt='' />
					<p className='text-[#8F8F8F] mt-2'>Окуудагы практика</p>
					<h2 className='text-2xl md:text-4xl text-yellow-500 font-semibold mt-2 '>90% түзөт</h2>
				</div>
				<div className='flex flex-col justify-center items-center px-[39px] py-6 border-t md:border-0'>
					<img src='/public/images/kyzmatker.png' alt='' />
					<p className='text-[#8F8F8F] mt-2'>Кызматкерлер</p>
					<h2 className='text-2xl md:text-4xl text-yellow-500 font-semibold mt-2 '>40+</h2>
				</div>
			</div>
		</div>
	);
};

export default CompanyBlock;
