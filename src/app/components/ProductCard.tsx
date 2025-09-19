import DealTypeTag from "./DealTypeTag";
import Image from "next/image";
interface ProductCardProps {
    title: string;
    price: number;
    discount: number;
    discountedPrice: number;
    imageUrl: string;
    rating: number;
    isHotDeal?: boolean;
}

const ProductCard = ({title, price, discount, discountedPrice, imageUrl, rating, isHotDeal=true}: ProductCardProps) => {
    return (
        <div className={`w-82 h-102 flex flex-col justify-start items-center rounded-md`}>
            <div className={`w-full h-3/4 bg-[var(--secondary-background)] relative font-poppins rounded-md`}>
                <Image src={imageUrl} alt={title} width={328} height={196} className={`w-full h-full object-contain p-4`} />
                {isHotDeal && <div className={`absolute top-0 left-0`}><DealTypeTag title="HOT" /></div>}
            </div>
            <div className={`w-full h-1/4 flex flex-col items-center justify-center gap-1 px-2 py-1`}>
                <h1 className={`text-md font-bold text-foreground`}>{title}</h1>
                <div className={`w-full h-8 flex items-center justify-center border border-yellow-500`}>
                    {rating}
                </div>
                <div className={`w-full flex items-center justify-center gap-6`}>
                    <span className={`text-md text-[var(--blue)] font-bold`}>${discountedPrice}</span>
                    <div className={`w-20 flex items-center justify-center gap-2`}>
                        <span className={`opacity-50 line-through font-semibold text-sm`}>${price}</span>
                        <span className={`text-red-500 font-semibold text-sm`}>${discount}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
export type { ProductCardProps };