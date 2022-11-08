

export const MainSchema = () => {
    return (
        <div className="max-w-[1290px] mx-auto py-[60px]">
            <h1 className="text-[36px] leading-[50px] uppercase text-center font-light text-black mb-[37px]">Схема взаимодействия</h1>
            <ul className="flex items-start justify-between w-full">
                <li className="flex flex-col items-center w-full px-[30px]">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px]">1</h3>
                    <h6 className="littleTitle text-black mt-[28px] text-center mb-[40px]">Интервьюирование и&nbsp;выявление проблематики</h6>
                    <p className="par text-[#36353D] text-center">В&nbsp;процессе беседы обозначаются проблемы, видимые со&nbsp;стороны руководства компании, а&nbsp;также ожидания от&nbsp;взаимодействия с&nbsp;экспертом.</p>
                </li>
                <li className="flex flex-col items-center">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px]">2</h3>
                    <div className="border-x-2 border-blue">
                        <h6 className="littleTitle text-black mt-[46px] mb-[58px] text-center px-[30px]">Диагностика компании</h6>
                        <p className="par text-[#36353D] text-center  px-[30px]">Анализ текущего состояния показывает реальные проблемы и&nbsp;их&nbsp;предпосылки. Диагностика проводится с&nbsp;выездом на&nbsp;предприятие.</p>
                    </div>
                </li>
                <li className="flex flex-col items-center w-full px-[30px]">
                    <h3 className="bigTitle text-blue border-2 border-blue py-[22px] px-[38px] rounded-[50px]">3</h3>
                    <h6 className="littleTitle text-black mt-[28px] mb-[40px] text-center max-w-[282px]">Разработка  стратегического плана</h6>
                    <p className="par text-[#36353D] text-center">После выполнения диагностики формируется стратегия развития и&nbsp;выбираются методы достижения целей, проводится декомпозиция задач.</p>
                </li>
            </ul>
        </div>
    )
}