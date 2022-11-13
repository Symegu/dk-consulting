

export default function MainServices() {
    return (
        <section className="pt-[43px] pb-[100px] max-w-[1290px] mx-auto lg:max-w-[940px] lg:pt-[60px] lg:pb-0">
            <h2 className="bigTitle text-grey text-center mb-[27px] lg:text-[36px] lg:leading-[50px] ">Узнайте больше о наших услугах</h2>
            <ul className="flex items-start justify-between w-full lg:justify-center lg:flex-wrap">
                <li className="flex flex-col items-center w-full group lg:flex-col-reverse lg:w-[310px] lg:mr-[80px]">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px] group-hover:bg-blue  group-hover:text-white ease-in-out duration-300 lg:w-[223px] lg:py-[14px] lg:h-[60px] lg:mt-[20px]">АУДИТ</h4>
                    <ul className="flex flex-col items-center text-grey w-[305.5px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300 rounded-[8px] relative">
                        <li className="text-[18px] leading-[32px] font-light">Диагностика состояния</li>
                        <li className="text-[18px] leading-[32px] font-light"> Аудит процессов</li>
                        <li className="text-[18px] leading-[32px] font-light"> Выявление потерь</li>
                        <li className="text-[18px] leading-[32px] font-light"> Оценка потенциала</li>
                        <li className="text-[18px] leading-[32px] font-light"> Поиск точек роста</li>
                        <div className="absolute w-[1px]  h-full bg-blue right-[-9.5px] lg:h-[548px] lg:right-[-27.5%]"></div>
                    </ul>
                </li>
                <li className="flex flex-col items-center w-full group  lg:flex-col-reverse lg:w-[310px] lg:ml-[80px]">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300  lg:w-[223px] lg:py-[4px] lg:h-[60px] lg:mt-[20px]">ПРОМЫШЛЕННЫЙ КОНСАЛТИНГ</h4>
                    <ul className="flex flex-col items-center w-[305.5px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300  rounded-[8px] relative">
                        <li className="text-[18px] leading-[32px] font-light">Стратегия развития</li>
                        <li className="text-[18px] leading-[32px] font-light"> Оптимизация процессов</li>
                        <li className="text-[18px] leading-[32px] font-light"> Организационные изменения</li>
                        <li className="text-[18px] leading-[32px] font-light"> Мотивация персонала</li>
                        <li className="text-[18px] leading-[32px] font-light">Диверсификация продуктов</li>
                        <div className="absolute w-[1px] h-full bg-blue right-[-9.5px] lg:top-[-110%] lg:left-[-30%] lg:rotate-90 lg:h-[900px]"></div>
                    </ul>
                </li>
                <li className="flex flex-col items-center w-full group  lg:flex-col-reverse lg:w-[310px] lg:mr-[80px]">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300  lg:w-[223px] lg:py-[4px] lg:h-[60px] lg:mt-[20px]">ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА</h4>
                    <ul className="flex flex-col items-center w-[305.5px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300  rounded-[8px] relative">
                        <li className="text-[18px] leading-[32px] font-light">Разработка технологии</li>
                        <li className="text-[18px] leading-[32px] font-light"> Подбор оборудования</li>
                        <li className="text-[18px] leading-[32px] font-light"> Формирование команды</li>
                        <li className="text-[18px] leading-[32px] font-light"> Организация снабжения</li>
                        <li className="text-[18px] leading-[32px] font-light"> Менеджмент качества</li>
                        <div className="absolute w-[1px] h-full bg-blue right-[-9.5px] lg:hidden"></div>
                    </ul>
                </li>
                <li className="flex flex-col items-center w-full group  lg:flex-col-reverse lg:w-[310px] lg:ml-[80px]">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300  lg:w-[223px] lg:py-[14px] lg:h-[60px] lg:mt-[20px]">ОБУЧЕНИЕ</h4>
                    <ul className="flex flex-col items-center w-[305.5px] group-hover:bg-blue group-hover:text-white ease-in-out duration-300 rounded-[8px]">
                        <li className="text-[18px] leading-[32px] font-light">Методы эффективности</li>
                        <li className="text-[18px] leading-[32px] font-light">Операционное управление</li>
                        <li className="text-[18px] leading-[32px] font-light">Стратегический менеджмент</li>
                        <li className="text-[18px] leading-[32px] font-light"> Индивидуальное развитие</li>
                        <li className="text-[18px] leading-[32px] font-light"> Lean-технологии</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
