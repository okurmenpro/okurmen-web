import { FaGraduationCap } from 'react-icons/fa';

const CertificateSection = () => {
	return (
		<div className='container'>
			<div className='w-full bg-yellow-500 py-[79px] px-[34px] mt-20 rounded-[32px] block md:flex justify-between items-center'>
				<div>
					<div className='flex items-center gap-2 border border-white py-1 px-2 w-[100px] rounded-xl text-white'>
						<FaGraduationCap className='text-base' />
						<span className='font-semibold'>Diplom</span>
					</div>
					<h1
						className='text-2xl md:text-4xl text-white w-full md:w-[525px]
					mt-[20px]'
					>
						Билим берүү министрлигинен лицензия
					</h1>
					<p className=' text-base md:text-xl text-white w-full md:w-[509px] mt-[21px]'>
						Биздин академиянын Билим берүү министрлигинин лицензиясы бар, ал көрсөтүлгөн билим
						берүүнүн сапатына жана мыйзамдуулугуна кепилдик берет.
					</p>
					<p className=' text-base md:text-xl text-white w-full md:w-[509px] mt-[21px]'>
						Мындан тышкары, биздин академия окууну ийгиликтүү аяктагандан кийин ар бир студентке
						билим берүү программасын аяктагандыгы тууралуу диплом же сертификат берет.
					</p>
				</div>
				<div className='mt-10 md:mt-0'>
					<img src='/public/images/certificate.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default CertificateSection;
