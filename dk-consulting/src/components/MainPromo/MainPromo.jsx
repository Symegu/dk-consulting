import Button from "../UI/Button";


export default function MainPromo() {

    const buttonText = "Оставить заявку";

    return (
        <section className="main__promo">
                <h2>Комплексный консалтинг производственных компаний</h2>
                <div className="main-info-container">
                    <div className="main-info__left">
                        <h3>ОПЕРАЦИОННАЯ ЭФФЕКТИВНОСТЬ
                            Достижения без капиталовложений:</h3>
                        <ul className="percents">
                            <li>
                                <p>35%</p>
                                <p>Увеличение производительности</p>
                            </li>
                            <li>
                                <p>37%</p>
                                <p>Увеличение производительности</p>
                            </li>
                            <li>
                                <p>68%</p>
                                <p>Снижение уровня брака</p>
                            </li>
                        </ul>
                    </div>

                    <div className="main-info__right">
                        <h3>СТРАТЕГИЧЕСКОЕ УПРАВЛЕНИЕ
                            Достижение результатов:
                        </h3>
                        <ul className="percents">
                            <li>
                                <p>126%</p>
                                <p>Увеличение выручки</p>
                            </li>
                            <li>
                                <p>25%</p>
                                <p>Завоевание доли рынка РФ</p>
                            </li>
                            <li>
                                <p>Выход</p>
                                <p>на международный рынок</p>
                            </li>
                            <li>
                                <p>Сохранение</p>
                                <p>на международный рынок</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Button buttonText={buttonText}/>
        </section>
    )
}
