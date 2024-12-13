import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaGraduationCap } from 'react-icons/fa';

import jsPhoto from '../../../public/images/jsPhoto.png'

export const CourseListingPage = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()


	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get(`http://127.0.0.1:8000/courses/${id}/`)
				setProduct(data)
			} catch (error) {
				console.log('Ошибка', error)
			}
		}
		getProduct()
	}, [])


	return (
		<section className=''>
			<div className="container">
				<div className="flex flex-col gap-0 justify-center md:flex-row md:justify-between items-center">
					<div className='info'>

					<div onClick={() => navigate(-1)} className='cursor-pointer border border-gray-300 flex items-center justify-center gap-1 w-[111px] px-2 py-2 rounded-xl '>
						<FaGraduationCap />
						<span className='font-medium text-yellow-400'>Курстар</span>
					</div>
						<h1 className='text-6xl text-red-500'>{product.title}</h1>
						<p className='text-2xl'>{product.description}</p>
						{/* <span>{product.start_date}</span> */}
						<button type='submit' className=' mt-3 py-2 px-7 md:py-4 md:px-9 bg-yellow-500 rounded-full text-white font-semibold'>
									Консультация
								</button>
					</div>
					<div className='flex flex-col items-center'>
						<img className='rounded-lg w-full' src={jsPhoto} alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}