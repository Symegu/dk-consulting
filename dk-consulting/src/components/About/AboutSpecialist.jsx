import specialist from "../../assets/About/Фото (8).png"

export const AboutSpecialist = () => {
    return (
        <section className="max-w-[1290px] mx-auto py-[60px] lg:max-w-[940px] md:max-w-[690px] sm:max-w-[420px] xs:max-w-[290px]">
            <h1 className="bigTitle text-black lg:text-4xl md:text-4xl sm:text-xl xs:text-xl">Ведущий специалист</h1>
            <div className="w-full h-[1px] bg-blue my-[10px]"></div>
            <div className="bg-gradient-to-t from-[#232B30] via-[#303C43] to-[#37444C] h-full flex items-center justify-between mt-[15px]">
                <img src={specialist} className="md:w-[300px] sm:w-[200px] xs:w-[130px]" alt="denis kapitonenko"/>
                <div className="px-[35px] border-l-2 border-solid border-blue">
                    <h4 className="littleTitle text-blue lg:text-xl md:text-xl sm:text-lg sm:text-white sm:text-center xs:text-base xs:text-white xs:text-center">Капитоненко Денис</h4>
                    <h4 className="littleTitle text-blue mb-[10px] lg:text-xl md:text-xl sm:text-lg sm:text-center xs:text-base xs:text-center">CEO</h4>
                    <p className="par text-lightgrey lg:text-base md:text-base sm:hidden xs:hidden">Эксперт в&nbsp;управлении промышленными компаниями с&nbsp;семнадцатилетним стажем. Прошел путь от&nbsp;инженера до&nbsp;директора завода, имеет опыт создания компаний &laquo;с&nbsp;нуля&raquo;, организации бизнес-процессов всей цепочки разработки и&nbsp;серийного выпуска продукта, а&nbsp;также построения эффективных команд, нацеленных на&nbsp;достижение результата.</p>
                    <ul className="mt-[55px] md:hidden sm:hidden xs:hidden">
                        <h4 className="littleTitle text-blue mb-[29px] lg:text-xl lg:mb-2">Профессиональный опыт:</h4>
                        <li className="par text-lightgrey lg:text-base">&bull;	Карьерный путь: инженер-конструктор, технолог, начальник производства, директор завода, директор по&nbsp;развитию международного холдинга</li>
                        <li className="par text-lightgrey lg:text-base">&bull;	Обучение Lean Production по&nbsp;программе Toyota Total Production System (Япония)</li>
                        <li className="par text-lightgrey lg:text-base">&bull;	Стажировки в&nbsp;Швейцарии, Германии, Италии, Японии, Китае</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}