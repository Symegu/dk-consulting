export default function FormComponent() {
    return (
        <section className="max-w-[1290px] mx-auto">
            <div className="flex flex-col justify-between items-center ">
                <h2 className="text-[36px] leading-[50px] font-extralight text-center">Запрос на сотрудничество</h2>
                <p className="font-normal text-[26px] leading-[36px] text-center text-[#40454E]">Опишите Ваш запрос либо проблему и мы свяжемся с Вами</p>
            </div>
            <form
                type="submit"
                className="flex flex-col  items-center h-[750px] mt-[37px]"
            >
                <div className="flex justify-between items-center text-[#5A5656] w-[100%] mb-[32px]">
                    <div className="flex items-center">
                        <input type="radio" id="audit" className="w-[30px] h-[30px]"/>
                        <label htmlFor="audit" className="font-light text-[22px] leading-[30px] ml-[10px]">Аудит</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="consult" className="w-[30px] h-[30px]"/>
                        <label htmlFor="consult" className="font-light text-[22px] leading-[30px] ml-[10px]">Промышленный консалтинг</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="org" className="w-[30px] h-[30px]"/>
                        <label htmlFor="org" className="font-light text-[22px] leading-[30px] ml-[10px]">Организация производства</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="learn" className="w-[30px] h-[30px]"/>
                        <label htmlFor="learn" className="font-light text-[22px] leading-[30px] ml-[10px]">Обучение</label>
                    </div>
                </div>
                    <div className="flex flex-col w-[100%]">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal">
                                Ваше имя
                            </label>
                            <input type="name" id="name" placeholder="Иванов Иван" className="w-[100%] border-b-[1px] border-black mt-[25px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px]"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal">
                                E-mail
                            </label>
                            <input type="name" id="name" placeholder="mail@mail.ru" className="w-[100%] border-b-[1px] border-black mt-[25px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px]"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal">
                                Телефон
                            </label>
                            <input type="name" id="name" placeholder="+7 777 777 77 77" className="w-[100%] border-b-[1px] border-black mt-[25px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px]"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal">
                                Ваш запрос
                            </label>
                            <input type="name" id="name" placeholder="" className="w-[100%] border-b-[1px] border-black mt-[25px] text-[#40454E] font-light text-[22px] leading-[30px] mb-[30px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%]">
                        <div> <p className="text-[#4D8BBE] text-[26px] leading-[36px] font-normal" >Как вы узнали о нас?</p></div>
                        <div className="flex justify-between items-center text-[#5A5656] w-[100%] mt-[15px]">
                            <div className="flex items-center">
                                <input type="radio" id="social"  className="w-[30px] h-[30px]"/>
                                <label htmlFor="social" className="font-light text-[22px] leading-[30px] ml-[10px]">Социальные сети</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="inter" className="w-[30px] h-[30px]"/>
                                <label htmlFor="inter" className="font-light text-[22px] leading-[30px] ml-[10px]">Поиск в интернет</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="fr" className="w-[30px] h-[30px]"/>
                                <label htmlFor="fr" className="font-light text-[22px] leading-[30px] ml-[10px]">От знакомых</label>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" id="oth" className="w-[30px] h-[30px]"/>
                                <label htmlFor="oth" className="font-light text-[22px] leading-[30px] ml-[10px]">Другой источник</label>
                            </div>
                        </div>
                    </div>
                <button type="submit" className="w-[307px] h-[60px] bg-[#4D8BBE] text-white uppercase rounded-[8px] mt-[40px]">
                    отправить
                </button>
            </form>
        </section>
    )
}
