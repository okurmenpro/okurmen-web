// HeroSection.jsx

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, submitProduct } from '../../redux/PostProduct/PostProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeroSection = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.post_product.data);
	const status = useSelector((state) => state.post_product.status);
	const error = useSelector((state) => state.post_product.error);
	const [localData, setLocalData] = useState({ name: '', number: '' });

	useEffect(() => {
		setLocalData(data);
	}, [data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(submitProduct(localData));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLocalData(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<section className='w-full h-full bg-[url("/public/images/heroImage.jpg")] bg-center bg-cover bg-blend-multiply bg-[#0000008a] '>
			<div className='container'>
				<div className='flex items-center justify-center'>
					<div className='text-center flex flex-col justify-center items-center gap-3 mt-48 mb-52'>
						<h1 className='font-medium text-2xl md:text-5xl text-white '>
							<span className='font-bold text-blue-500'>ОКУРМЭН</span> менен IT'ге кадам таштаңыз
						</h1>
						<p className='mt-3 text-lg md:text-xl font-medium px-5 text-white'>
							Биз менен код жазганды гана эмес, IT ааламында жашаганда үйрөнөсүз
						</p>
						<form onSubmit={handleSubmit}>
							<div className='w-[300px] py-3 md:h-[152px] md:w-full  md:flex justify-center items-center gap-4 mt-5 border border-[#fff] rounded-3xl'>
								<input
									className='bg-[#EFEFEF] py-2 px-2 md:px-4 md:py-4 rounded-full outline-none mt-3 placeholder:text-gray-500'
									type='text'
									placeholder='Аты жонунуз...'
									name='name'
									onChange={handleChange}
									value={localData.name}
								/>
								<br />
								<input
									className='bg-[#EFEFEF] py-2 px-2 md:px-4 md:py-4 rounded-full outline-none mt-3 placeholder:text-gray-500'
									type='number'
									placeholder='+996'
									name='number'
									onChange={handleChange}
									value={localData.number}
								/>
								<br />
								<button type='submit' className=' mt-3 py-2 px-7 md:py-4 md:px-9 bg-yellow-500 rounded-full text-white font-semibold'>
									Жөнөтүү
								</button>
							</div>
						</form>
						{status === 'loading' && <p>Загрузка...</p>}
						{status === 'failed' && <p>Error: {error}</p>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
