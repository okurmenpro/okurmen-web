import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
		slidesToSlide: 4, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
};
const sliderImageUrl = [
	{
		url: '/public/images/guarde.JPG',
	},
	{
		url: '../../../public/images/jugie.jpeg',
	},
	{
		url: '../../../public/images/syrgak.JPG',
	},
	{
		url: '../../../public/images/photofootball.JPG',
	},
	{
		url: '../../../public/images/smmAizirek.JPG',
	},
];
const Slider = () => {
	return (
		<div className='container'>
			<div className='mt-[50px]'>
				<h1 className='text-center text-4xl font-semibold text-yellow-500'>Галерея</h1>
				<Carousel
					responsive={responsive}
					autoPlay={true}
					swipeable={true}
					draggable={true}
					showDots={true}
					infinite={true}
					partialVisible={false}
					dotListClass='custom-dot-list-style'
				>
					{sliderImageUrl.map((imageUrl, index) => {
						return (
							<div className='slider' key={index}>
								<img className='w-full h-[500px] object-cover' src={imageUrl.url} alt='movie' />
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};
export default Slider;
