import React from 'react'
import AboutCourse from '../../components/aboutCourse/aboutCourse';
import FrontendSvg from '../../../public/icons/FrontendSvg.svg'
import PriceFrontend from '../../components/priceFrontend/PriceFrontend'
import AdvantagesFrontend from '../../components/advantagesFrontend/AdvantagesFrontend'
import FrontendModules from '../../components/frontendModules/FrontendModules'

function FrontendPage() {
  const frontendDescription = `
  Основные задачи фронтенд-разработчика — создать и настроить интерфейс, чтобы он был красивым, удобным и работал на всех устройствах. 
  Для этого используют языки программирования HTML , CSS и JavaScript.
`;
  return (
    <div>
         <AboutCourse
        title="Frontend"
        description={frontendDescription}
        image={FrontendSvg}
        imageAlt="Frontend icons"
      />
      <PriceFrontend/>
      <AdvantagesFrontend/>
      <FrontendModules/>
    </div>
  )
}

export default FrontendPage
