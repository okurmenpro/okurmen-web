import React from 'react'
import AboutCourse from '../../components/aboutCourse/aboutCourse';
import FrontendIcons from '../../../public/icons/FrontentIcons.svg'
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
        image={FrontendIcons}
        imageAlt="Frontend icons"
      />
    </div>
  )
}

export default FrontendPage