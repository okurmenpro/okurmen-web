import { FaGraduationCap } from 'react-icons/fa';
import CourseCard from './courseCard/CourseCard';
import Card from './card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CoursePage = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get('http://127.0.0.1:8000/courses/')
				setProduct(data)
			} catch (error) {
				console.log('Ошибка', error);
			}
		}
		getProduct()
	}, [])

	return (
		<section id='course'>
			<div className='container'>
				<div className='pt-16'>
					<div className='border border-gray-300 flex items-center justify-center gap-1 w-[111px] px-2 py-2 rounded-xl '>
						<FaGraduationCap />
						<span className='font-medium text-yellow-400'>Курстар</span>
					</div>

					<h1 className=' text-4xl md:text-5xl font-semibold text-[#202020] mt-3'>
						Жакында <span className='text-yellow-400'>башталат</span>
					</h1>
					<div className='mt-10 md:flex justify-between items-center flex-wrap md:p-0'>
						{
							product.map(item => (
								<CourseCard key={item.id} {...item} />
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoursePage;

