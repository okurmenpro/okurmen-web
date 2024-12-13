import { useNavigate } from 'react-router-dom';
const CourseCard = ({ title, start_date, technologies, id }) => {
	const navigate = useNavigate()
	return (
		<div className='w-full mt-3 lg:w-[674px] py-3 px-3 bg-[#EBEBEB] rounded-3xl block md:flex justify-between items-center gap-4'>
			<div className='w-full md:w-[220px] md:h-[200px] bg-white rounded-3xl flex justify-center md:block'>
				<img className=' w-[200px] md:w-full ' src='/public/images/jsillustartion.webp' alt='' />
			</div>
			<div className='w-full ml-4'>
				<h1 className='font-bold text-xl'>{title}</h1>
				<p className='text-[#5C5C5C] mt-2'>6 ай + IT-club</p>
				<ul className='flex items-center flex-wrap mt-3 gap-1 text-sm'>
					{
						technologies.map(el => (
							<li key={el.id} className='py-1 px-2 bg-white rounded-full mt-1 uppercase'>{el.name}</li>
						))
					}
				</ul>

				<div className='flex justify-between items-center mt-4'>
					<p>
						Башталышы: <span className='text-black font-semibold'>{start_date}</span>
					</p>
					<button onClick={() => navigate(`/course/${id}`)} className='px-[19px] py-[11px] bg-yellow-500 rounded-full mt-[18px]'>
						Кенениээк
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
