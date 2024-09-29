import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import Navbar from '../navbar/Navbar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navlinks = [
	{
		title: 'Башкы бет',
		link: '/',
	},
	{
		title: 'Курстар',
		link: '#course',
	},
	{
		title: 'Компания жөнүндө',
		link: '#company-info',
	},
	{
		title: 'Менторлор',
		link: '#mentors',
	},
];

const Header = () => {
	const [open, setOpen] = useState(false);
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		function scrollBar() {
			if (window.scrollY >= 100) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		}

		window.addEventListener('scroll', scrollBar);
	}, []);

	const handleMenu = () => {
		setOpen((prev) => !prev);
	};

	return (
		<header className={`'sm:px-6 w-full bg-white ${isScroll ? 'is-scroll' : 'no-scroll'}`}>
			<div className='container'>
				<div className='flex items-center justify-between '>
					<div className='ml-3 md:ml-0'>
						<img width={80} src='/public/images/logo.png' alt='' />
					</div>
					<Navbar navlinks={navlinks} />
					<div className='hidden md:block'>
						<Button text='Консультация' />
					</div>
					<div className=' flex md:hidden'>
						<button onClick={handleMenu} className='w-7'>
							{open === true ? <FaTimes /> : <FaBars />}
						</button>
					</div>
				</div>
			</div>
			{open ? (
				<div className='md:hidden absolute bg-[#00000068] h-screen w-full mt-4 '>
					<div className='absolute w-full z-20	 bg-white rounded-b-3xl pb-3 space-y-1 sm:px-3 md:px-0 shadow-lg transition-all ease-in-out duration-500'>
						{navlinks.map((link, idx) => (
							<a className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' key={idx} href={link.link}>{link.title}</a>
						))}
						<div className='flex items-center justify-center'>
							<Button text={'Консультация'} />
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
};

export default Header;
