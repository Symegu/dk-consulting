import Button from "../UI/Button";


export default function MainPromo() {

    const buttonText = "Оставить заявку";

    return (
        <section className="bg-mainpromo h-[910px] bg-no-repeat bg-cover lg:h-[680px]">
            <div className="max-w-[1290px] mx-auto flex flex-col items-center py-[75px] lg:max-w-[940px] lg:py-[30px] md:max-w-[688px]">
                <h2 className="max-w-[653px] text-center text-white bigTitle lg:mb-[20px]
                lg:text-[36px] lg:leading-[50px] md:mb-[60px]">Комплексный консалтинг производственных компаний</h2>
                    <div className="flex justify-between items-start w-full mb-[75px] lg:mb-[20px]">
                        <div className="flex flex-col items-start justify-between">
                            <h3 className="text-[20px] leading-[32px] text-white font-light lg:text-[18px] lg:leading-[28px] md:text-[18px] md:leading-[28px]">ОПЕРАЦИОННАЯ ЭФФЕКТИВНОСТЬ</h3>
                            <p className="text-[20px] leading-[32px] text-white font-light lg:text-[18px] lg:leading-[28px]  md:text-[18px] md:leading-[28px]">Достижения без капиталовложений:</p>
                            <div className="w-[360px] h-[1px] bg-blue mt-[12px] mb-[20px] lg:w-[309px] lg:my-[10px] md:w-[309px] md:my-[14px]"></div>
                            <ul>
                                <li className="mb-[42px] lg:mb-[20px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light lg:text-[50px] lg:leading-[70px] md:text-[50px] md:leading-[70px]">35%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal lg:text-[18px] lg:leading-[18px]  md:text-[18px] md:leading-[18px]">Увеличение производительности</p>
                                </li>
                                <li className="mb-[42px] lg:mb-[20px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light lg:text-[50px] lg:leading-[70px] md:text-[50px] md:leading-[70px]">37%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal lg:text-[18px] lg:leading-[18px]  md:text-[18px] md:leading-[18px]">Увеличение производительности</p>
                                </li>
                                <li>
                                    <p className="text-[60px] leading-[84px] text-blue font-light lg:text-[50px] lg:leading-[70px] md:text-[50px] md:leading-[70px]">68%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal lg:text-[18px] lg:leading-[18px] md:text-[18px] md:leading-[18px]">Снижение уровня брака</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                            <h3 className="text-[20px] leading-[32px] text-white font-light lg:text-[18px] lg:leading-[28px] md:text-[18px] md:leading-[28px]">СТРАТЕГИЧЕСКОЕ УПРАВЛЕНИЕ</h3>
                            <p className="text-[20px] leading-[32px] text-white font-light lg:text-[18px] lg:leading-[28px] md:text-[18px] md:leading-[28px]">Достижение результатов:</p>
                            <div className="w-[360px] h-[1px] bg-blue mt-[12px] mb-[20px] lg:w-[309px] lg:my-[10px] md:w-[277px] md:my-[14px]"></div>
                            <ul className="flex flex-col items-end">
                                <li className="mb-[18px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light text-end  lg:text-[50px] lg:leading-[70px] md:text-[50px] md:leading-[70px]">126%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end  lg:text-[18px] lg:leading-[18px] md:text-[18px] md:leading-[18px]">Увеличение выручки</p>
                                </li>
                                <li className="mb-[18px]">
                                    <p className="text-[60px] leading-[84px] text-blue font-light text-end  lg:text-[50px] lg:leading-[70px] md:text-[50px] md:leading-[70px]">25%</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end  lg:text-[18px] lg:leading-[18px] md:text-[18px] md:leading-[18px]">Завоевание доли рынка РФ</p>
                                </li>
                                <li className="mb-[18px]">
                                    <p className="text-[40px] leading-[46px] text-blue font-light uppercase text-end lg:text-[35px] lg:leading-[40px] md:text-[35px] md:leading-[40px]">Выход</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end  lg:text-[18px] lg:leading-[18px] md:text-[18px] md:leading-[18px]">на международный рынок</p>
                                </li>
                                <li>
                                    <p className="text-[40px] leading-[46px] text-blue font-light uppercase text-end lg:text-[35px] lg:leading-[40px] md:text-[35px] md:leading-[40px]">Сохранение</p>
                                    <p className="text-[22px] leading-[23px] text-white font-normal text-end  lg:text-[18px] lg:leading-[18px] md:text-[18px] md:leading-[18px]">роста прибыли в кризисных ситуациях</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Button buttonText={buttonText}/>
            </div>
        </section>
    )
}
