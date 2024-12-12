import React from "react";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from "../../components/advantagesCourse/AdvantagesCourse";
import advantagesBackend from '../../data/advantagesBackend';
import sharp from '../../../public/icons/sharp.svg';
import c_sharp from '../../../public/icons/c_sharp.svg'

const CSharp = () => {
    const backendDescription = `
  C# (произносится "си шарп") — это язык программирования, который используется для создания самых разных приложений: от игр до веб-сайтов и программ для компьютеров и смартфонов. Он был разработан компанией Microsoft и часто используется в их платформах, например, для Windows и Azure. Он сочетает в себе мощь и простоту. Например, C# помогает избежать многих ошибок, которые часто возникают у новичков, и делает код понятным`
    return (
        <div>
            <AboutCourse
                title="C Sharp"
                description={backendDescription}
                image={sharp}
                imageAlt="Backend logo"
            />
            <PriseCourse
                title="C Sharp"
                image={c_sharp}
                duration="6 месяцев"
                englishIncluded={true}
                frequency="4 раза в неделю"
                time="1,5 часа"
                startDate="12 ноябрь, 2024 год"
                additional={["IT клуб", "Английский язык"]}
                price="15 000 сом"
            />
            <AdvantagesCourse
                data={advantagesBackend}
                title="Преимущества курса" />
            {/* <Benefits
                benefitsData={benefitsData}
                sectionTitle="Главные модули"
                highlightTitle="Анализ информации"
                additionalText="Машинное обучение"
            /> */}

        </div>
    );
};

export default CSharp;