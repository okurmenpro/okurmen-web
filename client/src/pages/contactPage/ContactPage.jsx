import { FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, submitProduct } from '../../redux/PostProduct/PostProduct';
import { useEffect, useState } from 'react';

const ContactPage = () => {
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
		<div id='contact' className='container'>
			<div className='block md:flex items-center justify-between gap-5 w-full mt-[114px] '>
				<div className='w-full md:w-[519px] flex flex-col items-center justify-center'>
					<h2 className='text-3xl font-semibold'>
						Веб-сайт аркылуу катталып, каалаган курска
						<span className='text-yellow-500'> 10% арзандатуу</span> алыңыз!
					</h2>
					<img className='w-[300px] md:w-full mt-' src='/public/images/contact.png' alt='' />
				</div>
				<form onSubmit={handleSubmit} className='w-full md:w-[609px] flex flex-col justify-between gap-[20px] rounded-3xl text-center border border-gray px-[76px] py-[56px] mt-4 md:mt-0 shadow-md'>
					<h1>
						Байланыш <span>үчүн</span>
					</h1>
					<input
						className='w-full bg-[#EFEFEF] py-[20px] px-3 rounded-full outline-none'
						placeholder='Name...'
						type='text'
						name='name'
						onChange={handleChange}
						value={localData.name}
					/>
					<input
						className='w-full bg-[#EFEFEF] py-[20px] px-3 rounded-full outline-none'
						placeholder='+996'
						type='number'
						name='number'
						onChange={handleChange}
						value={localData.number}
					/>
					<button type='submit' className='bg-yellow-500 flex items-center justify-center gap-2 py-4 rounded-full text-white font-semibold text-lg'>
						Жөнөтүү <FaAngleRight className='mt-1' />
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
