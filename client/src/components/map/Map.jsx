const Map = () => {
	return (
		<div className='container'>
			<div className='w-full'>
				<div className='block inline-block md:flex justify-between items-center mt-[140px]'>
					<h1 className='text-4xl font-semibold'>
						Биздин <span className='text-yellow-500'>дарек</span>
					</h1>
					<div className='mt-3'>
						<p>Бишкек, Турусбеков көчөсү, 109/1</p>
						<p className='mt-2'>+996 (500) 443 423</p>
					</div>
				</div>
				<div className='w-full h-full mt-[60px] mb-[70px]'>
					<iframe className='rounded-xl w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6485044050073!2d74.58361327613626!3d42.88026257114943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8193ec55aa3%3A0x906abe2a92e24f01!2zMTA5LzEg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1721727473416!5m2!1sru!2skg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default Map;