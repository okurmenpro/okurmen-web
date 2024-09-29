import Button from "../../ui/Button"
import ItCard from "./itClubCard/ItCard"
import ItCLubSection from "./itClubSection/ItCLubSection"

const ItClubPage = () => {
	return (
		<>
			<section className="w-full h-screen">
				<div className="container">
					<div className=" block md:flex justify-between items-center">
						<div>
							<div className="px-1 py-2 w-[124px] border border-yellow-500 flex items-center justify-center rounded-[8px]">Стажировка</div>
							<h1 className="mt-[12px] text-[55px] font-semibold">IT Клуб</h1>
							<p className="mt-[12px] w-full md:w-[547px] text-2xl">
								Академия тарабынан мыкты окуучуларга команда
								менен иштөө, портфолио түзүү боюнча билимдер
								практиканын негизинде берилет
							</p>
							<div className="mt-[12px]">
								<Button text='Консултация' />
							</div>
						</div>
						<div>
							<img className="w-[500px] md:w-full" src="/public/images/Vector.png" alt="" />
						</div>
					</div>
				</div>
			</section>
			<ItCard />
			<ItCLubSection />
		</>
	)
}

export default ItClubPage