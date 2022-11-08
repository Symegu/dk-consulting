

export default function MainServices() {
    return (
        <section className="pt-[43px] pb-[100px] max-w-[1290px] mx-auto">
            <h2 className="bigTitle text-grey text-center mb-[27px]">Узнайте больше о наших услугах</h2>
            <ul className="flex items-start justify-between w-full">
                <li className="main-services-list-item">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px]">АУДИТ</h4>
                    <ul className="flex flex-col items-center w-[300px] px-[7px] border-r-1px">
                        <li className="text-[18px] leading-[32px] text-grey font-light">Диагностика состояния</li>
                        <li className="text-[18px] leading-[32px] text-grey font-light"> Аудит процессов</li>
                        <li className="text-[18px] leading-[32px] text-grey font-light"> Выявление потерь</li>
                        <li className="text-[18px] leading-[32px] text-grey font-light"> Оценка потенциала</li>
                        <li className="text-[18px] leading-[32px] text-grey font-light"> Поиск точек роста</li>
                    </ul>
                </li>
                <li className="main-services-list-item">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px]">ПРОМЫШЛЕННЫЙ КОНСАЛТИНГ</h4>
                    <div className="main-services-caption">
                        <p>Стратегия развития</p>
                        <p> Оптимизация процессов</p>
                        <p> Организационные изменения</p>
                        <p> Мотивация персонала</p>
                        <p>Диверсификация продуктов</p>
                    </div>
                </li>
                <li className="main-services-list-item">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px]">ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА</h4>
                    <div className="main-services-caption">
                        <p>Разработка технологии</p>
                        <p> Подбор оборудования</p>
                        <p> Формирование команды</p>
                        <p> Организация снабжения</p>
                        <p> Менеджмент качества</p>
                    </div>
                </li>
                <li className="main-services-list-item">
                    <h4 className="text-[16px] text-grey w-[305.5px] border-2 border-grey rounded-[8px] text-center py-[22px] mb-[62px]">ОБУЧЕНИЕ</h4>
                    <div className="main-services-caption">
                        <p>Методы эффективности</p>
                        <p>Операционное управление</p>
                        <p>Стратегический менеджмент</p>
                        <p> Индивидуальное развитие</p>
                        <p> Lean-технологии</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
