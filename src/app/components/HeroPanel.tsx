import { HeroTitle, HeroSubtitle } from '../data/HeroData';
import Image from 'next/image';
const HeroPanel = () => {
    return (
        <div className={`w-full h-85 bg-[#40bfff] flex items-center justify-between px-10`}>
            <div className={`w-87 h-34 flex flex-col justify-between items-start text-background`}>
                <div className={`flex flex-col justify-center items-start`}>
                    <h1 className={`font-bold text-3xl`}>{HeroTitle}</h1>
                    <p className={`text-sm`}>{HeroSubtitle}</p>
                </div>
                <button className={`group transition-all duration-300`}>
                    <span className={`text-xs font-bold border-b-2 group-hover:text-gray-200 transition-all duration-300 ease-in-out`}>SHOP N</span>
                    <span className={`text-xs font-bold group-hover:text-gray-200 transition-all duration-300 ease-in-out`}>OW</span>
                </button>
            </div>

            <div className={`w-80 h-60 mt-10 mr-10`}>
                <Image src="/HeroProduct.png" alt="Hero Product Image" width={320} height={240} className={`w-full h-full object-cover rotate-y-180`} />
            </div>
        </div>
    )
}

export default HeroPanel;