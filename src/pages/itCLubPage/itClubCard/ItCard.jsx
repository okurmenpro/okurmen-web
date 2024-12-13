import React from 'react'

const ItCard = () => {
	return (
		<section className='w-full h-full bg-[#F6F6F6]'>
			<div className="container">
				<div className='text-center pt-[60px] pb-[60px]'>
					<h1 className='text-[55px] font-semibold'>IT Клуб</h1>
					<div className='block md:flex items-center justify-between flex-wrap gap-[30px] mt-[60px]'>
						<div className='bg-[#FFFFFF] w-full md:w-[400px] py-[53px] px-[32px] flex flex-col items-center justify-center gap-[24px]  rounded-[20px] shadow-md mt-[20px] md:mt-0'>
							<div className='bg-indigo-500 w-[82px] h-[82px] flex items-center justify-center rounded-[20px]'>
								<img src="/public/images/vectoricon.png" alt="" />
							</div>
							<h2 className='font-semibold text-xl'>Катышуунун шарты</h2>

							<p className='w-full md:w-[370px] font-normal'>IT клубка кошулуу үчүн тандаган багытыңызда мыкты окууңуз зарыл. Проект менеджер биринчи тест алат, андан кийин интервью аркылуу тандайт.</p>
						</div>
						<div className='bg-[#FFFFFF] w-full md:w-[400px] py-[53px] px-[32px] flex flex-col items-center justify-center gap-[24px]  rounded-[20px] shadow-md mt-[20px] md:mt-0'>
							<div className='bg-indigo-500 w-[82px] h-[82px] flex items-center justify-center rounded-[20px]'>
								<img src="/public/images/vectoricon.png" alt="" />
							</div>
							<h2 className='font-semibold text-xl'>Максаты</h2>

							<p className='w-full md:w-[370px] font-normal'>Мыкты окуучулар реалдуу проекттер менен иштеп, IT компанияларга жумушка кирүүсүнө көмөктөшүү</p>
						</div>
						<div className='bg-[#FFFFFF] w-full md:w-[400px] py-[53px] px-[32px] flex flex-col items-center justify-center gap-[24px]  rounded-[20px] shadow-md mt-[20px] md:mt-0'>
							<div className='bg-indigo-500 w-[82px] h-[82px] flex items-center justify-center rounded-[20px]'>
								<img src="/public/images/vectoricon.png" alt="" />
							</div>
							<h2 className='font-semibold text-xl'>Мүмкүнчүлүктөр</h2>

							<p className='w-full md:w-[370px] font-normal'>Коммерциялык буйрутмаларды аткарып кирише табуу, IT компанияларга экскурсия кылуу, алардан стажировкадан өтүү</p>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default ItCard