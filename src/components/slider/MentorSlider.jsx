import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MentorSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div id='mentors' className='container'>
			<div className='mt-24'>
				<h1 className='text-center mb-5 text-4xl font-semibold '>Mentor</h1>
				<Slider {...settings}>
					{data.map((d) => (
						<div key={d.name} className='bg-white h-[450px] text-black rounded-xl]'>
							<div className='h-56 bg-yellow-500 flex justify-center items-center rounded-t-xl'>
								<img src={d.img} alt='' className='h-44 w-44 rounded-full bg-white' />
							</div>

							<div className='flex flex-col items-center justify-center gap-4 p-4'>
								<p className='text-xl font-semibold'>{d.name}</p>
								<p className='text-center'>{d.review}</p>
								<button className='bg-yellow-500 text-white text-lg px-6 py-1 rounded-xl'>
									Read More
								</button>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

const data = [
	{
		name: `John Morgan`,
		img: `https://static.vecteezy.com/system/resources/previews/009/305/107/non_2x/man-avatar-clipart-illustration-free-png.png`,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		name: `Ellie Anderson`,
		img: `/students/Ellie_Anderson.jpg`,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
];

export default MentorSlider;
