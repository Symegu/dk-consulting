import Button from "../UI/Button";


export default function MainPromo() {

    const buttonText = "Оставить заявку";

    return (
        <section className="bg-mainpromo h-[910px]">
            <div className="max-w-[1290px] mx-auto flex flex-col items-center py-[75px]">
                <h2 className="max-w-[653px] text-center text-white bigTitle">Комплексный консалтинг производственных компаний</h2>
                    <div className="flex justify-between items-center w-full mb-[75px]">
                        <div className="flex flex-col items-start justify-between">
                            <h3 className="text-[20px] leading-[32px] text-white font-light">ОПЕРАЦИОННАЯ ЭФФЕКТИВНОСТЬ</h3>
                            <p className="text-[20px] leading-[32px] text-white font-light">Достижения без капиталовложений:</p>
                            <div className="w-[360px] h-[1px] bg-blue mt-[12px] mb-[20px]"></div>
                            <ul>
                                <li className="mb-[42px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light">35%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal">Увеличение производительности</p>
                                </li>
                                <li className="mb-[42px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light">37%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal">Увеличение производительности</p>
                                </li>
                                <li>
                                    <p className="text-[60px] leading-[84px] text-blue font-light">68%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal">Снижение уровня брака</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                            <h3 className="text-[20px] leading-[32px] text-white font-light">СТРАТЕГИЧЕСКОЕ УПРАВЛЕНИЕ</h3>
                            <p className="text-[20px] leading-[32px] text-white font-light">Достижение результатов:</p>
                            <div className="w-[360px] h-[1px] bg-blue mt-[12px] mb-[20px]"></div>
                            <ul className="flex flex-col items-end">
                                <li className="mb-[18px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light text-end">126%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end">Увеличение выручки</p>
                                </li>
                                <li className="mb-[18px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light text-end">25%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end">Завоевание доли рынка РФ</p>
                                </li>
                                <li className="mb-[18px]">
                                    <p className="text-[40px] leading-[46px] text-blue font-light uppercase text-end">Выход</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end">на международный рынок</p>
                                </li>
                                <li>
                                    <p className="text-[40px] leading-[46px] text-blue font-light uppercase text-end">Сохранение</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end">на международный рынок</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Button buttonText={buttonText}/>
            </div>
        </section>
    )
}
