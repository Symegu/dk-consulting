import specialist from "../../assets/About/Фото (8).png"

export const AboutSpecialist = () => {
    return (
        <section className="max-w-[1290px] mx-auto py-[60px]">
            <h1 className="bigTitle text-black">Ведущий специалист</h1>
            <div className="w-full h-[1px] bg-blue my-[10px]"></div>
            <div className="bg-gradient-to-t from-[#232B30] via-[#303C43] to-[#37444C] h-full flex items-center justify-between mt-[15px]">
                <img src={specialist} alt="denis kapitonenko photo"/>
                <div className="px-[35px] border-l-2 border-solid border-blue">
                    <h4 className="littleTitle text-blue">Капитоненко Денис</h4>
                    <h4 className="littleTitle text-blue mb-[10px]">CEO</h4>
                    <p className="par text-lightgrey">Эксперт в&nbsp;управлении промышленными компаниями с&nbsp;семнадцатилетним стажем. Прошел путь от&nbsp;инженера до&nbsp;директора завода, имеет опыт создания компаний &laquo;с&nbsp;нуля&raquo;, организации бизнес-процессов всей цепочки разработки и&nbsp;серийного выпуска продукта, а&nbsp;также построения эффективных команд, нацеленных на&nbsp;достижение результата.</p>
                    <ul className="mt-[55px]">
                        <h4 className="littleTitle text-blue mb-[29px]">Профессиональный опыт:</h4>
                        <li className="par text-lightgrey">&bull;	Карьерный путь: инженер-конструктор, технолог, начальник производства, директор завода, директор по&nbsp;развитию международного холдинга</li>
                        <li className="par text-lightgrey">&bull;	Обучение Lean Production по&nbsp;программе Toyota Total Production System (Япония)</li>
                        <li className="par text-lightgrey">&bull;	Стажировки в&nbsp;Швейцарии, Германии, Италии, Японии, Китае</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}