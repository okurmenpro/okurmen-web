import React from "react";
import AboutCourse from "../../components/aboutCourse/aboutCourse";
import PriseCourse from "../../components/priceCourse/PriceCourse";
import AdvantagesCourse from "../../components/advantagesCourse/AdvantagesCourse";
import advantagesBackend from '../../data/advantagesBackend';
import sharp from '../../../public/icons/sharp.svg';
import c_sharp from '../../../public/icons/c_sharp.svg';
import advantages from "../../data/advantages";
import { useTranslation } from "react-i18next";

const CSharp = () => {
    const { t } = useTranslation();
    const additional = [t('itClub'), t('englishLanguage')];
    const csharpDescription = t('csharp_description'); 

    return (
        <div>
            <AboutCourse
                title="C Sharp"
                description={csharpDescription} 
                image={sharp}
                imageAlt="C Sharp logo"
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
                data={advantages}
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
