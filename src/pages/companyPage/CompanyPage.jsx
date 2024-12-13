import CompanyBlock from '../../ui/companyBlock/CompanyBlock';

const CompanyPage = () => {
	return (
		<div id='company-info' className='container'>
			<div className=' mt-[120px]'>
				<h1 className='text-3xl text-center md:text-5xl font-semibold'>Компания жөнүндө</h1>
				<p className='text-sm md:text-xl text-center font-medium py-3'>
					Академия маалыматтык технологиялар тармагында сапаттуу билим берүү максатында 2022-жылы
					түзүлгөн.
				</p>
				<CompanyBlock category='Компания' title='Биз цифраларда' />
			</div>
		</div>
	);
};

export default CompanyPage;
