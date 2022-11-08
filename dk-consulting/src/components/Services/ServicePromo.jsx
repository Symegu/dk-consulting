import { Link } from 'react-scroll'

export const ServicePromo = () => {
    return (
        <div className="h-[910px] bg-no-repeat bg-bottom bg-servicepromo bg-cover">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full">
                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative">
                    <div className="absolute top-[203px] right-[65px]">
                        <div className="max-w-[485px] flex flex-col items-center">
                            <h1 className="text-[22px] leading-[34px] text-center uppercase font-extralight text-white ml-[10px]">Управление процессами компании для повышения эффективности бизнеса</h1>
                            <ul className='mt-[48px] w-full flex flex-col items-center'>
                                <Link to='audit' smooth={true} className='mb-[48px]'>
                                    <button className='transbtn'>аудит</button>
                                </Link>
                                <Link to='consult' smooth={true} className='mb-[48px]'>
                                    <button className='transbtn'>Промышленный консалтинг</button>
                                </Link>
                                <Link to='organize' smooth={true} className='mb-[48px]'>
                                    <button className='transbtn'>ОРГАНИЗАЦИЯ ПРОИЗВОДСТВА</button>
                                </Link>
                                <Link to='teach' smooth={true}>
                                    <button className='transbtn'>обучение</button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}