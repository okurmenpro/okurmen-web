import { FaGraduationCap } from 'react-icons/fa';
import { WorkCard } from './workCard/WorkCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WorkSection = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get('http://127.0.0.1:8000/master-classes/')
				setProduct(data)
			} catch (error) {
				console.log('Ошибка', error)
			}
		}
		getProduct()
	}, [])
	return (
		<section className='bg-black mt-[50px] py-[74px]'>
			<div className='container'>
				<div className='text-white'>
					<div className='flex items-center gap-2 border border-white py-1 px-2 w-[100px] rounded-xl text-white'>
						<FaGraduationCap className='text-base' />
						<span className='font-semibold text-sm md'>Иш чара</span>
					</div>
					<h1 className='text-2xl md:text-4xl mt-[20px]'>
						Мастер класстар жана <span className='text-yellow-500'>иш-чаралар</span>
					</h1>
					<div className='w-full flex flex-col flex-wrap md:flex-row gap-2 justify-between'>
						{
							product.map(el => (
								<WorkCard key={el.id} {...el} />
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkSection;
