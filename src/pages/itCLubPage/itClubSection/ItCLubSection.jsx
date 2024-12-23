import React from 'react'

const ItCLubSection = () => {
	return (
		<div className='container'>
			<div className='block md:flex justify-between items-center mt-5'>
				<div className='flex items-center justify-center md:block'>
					<img className='w-[300px] md:w-full' src="/public/images/club-advantages.f3296dac.svg.png" alt="" />
				</div>
				<div className='mt-[60px]'>
					<h1 className='text-center text-4xl md:text-[53px] font-semibold'>Артыкчылыктар</h1>
					<div className='grid grid-cols-2 gap-9 mt-[62px]'>
						<div>
							<img src="/public/images/vectoricon.png" alt="" />
							<h2 className='font-semibold text-xl'>Ментор</h2>
							<p className='w-[176px] font-normal text-sm'>Стажерлор тажрыйбалуу адистерден колдоо алат.</p>
						</div>
						<div>
							<img src="/public/images/vectoricon.png" alt="" />
							<h2 className='font-semibold text-xl'>Билим берүү</h2>
							<p className='w-[176px] font-normal text-sm'>Сиздин жөндөмүңүздү кеңейтүү үчүн ар кандай долбоорлор.</p>
						</div>
						<div>
							<img src="/public/images/vectoricon.png" alt="" />
							<h2 className='font-semibold text-xl'>Практикалык тажрыйба</h2>
							<p className='w-[176px] font-normal text-sm'>Профессионалдуу IT чөйрөсүндө өз билимиңизди практикада колдонуу мүмкүнчүлүгү.</p>
						</div>
						<div>
							<img src="/public/images/vectoricon.png" alt="" />
							<h2 className='font-semibold text-xl'>Стажировкага мүмкүнчүлүк</h2>
							<p className='w-[176px] font-normal text-sm'>Практиканы аяктагандан кийин жумушка орношуу мүмкүнчүлүгү.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItCLubSection